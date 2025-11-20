import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
    }

    const todos = await prisma.todo.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json(todos);
  } catch (error) {
    console.error("Todo 목록 조회 오류:", error);
    return NextResponse.json({ error: "Todo 목록을 불러오는데 실패했습니다." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
    }

    const body = await request.json();
    const { title } = body;

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json({ error: "제목은 필수입니다." }, { status: 400 });
    }

    const todo = await prisma.todo.create({
      data: {
        userId,
        title: title.trim(),
        completed: false
      }
    });

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    console.error("Todo 생성 오류:", error);
    return NextResponse.json({ error: "Todo 생성에 실패했습니다." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
    }

    const { id } = await params;
    const todoId = parseInt(id, 10);

    if (isNaN(todoId)) {
      return NextResponse.json({ error: "유효하지 않은 Todo ID입니다." }, { status: 400 });
    }

    const body = await request.json();
    const { completed } = body;

    if (typeof completed !== "boolean") {
      return NextResponse.json({ error: "completed는 boolean 값이어야 합니다." }, { status: 400 });
    }

    const todo = await prisma.todo.findFirst({
      where: {
        id: todoId,
        userId,
      },
    });

    if (!todo) {
      return NextResponse.json({ error: "Todo를 찾을 수 없습니다." }, { status: 404 });
    }

    const updatedTodo = await prisma.todo.update({
      where: {
        id: todoId,
      },
      data: {
        completed,
      },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error("Todo 업데이트 오류:", error);
    return NextResponse.json({ error: "Todo 업데이트에 실패했습니다." }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
    }

    const { id } = await params;
    const todoId = parseInt(id, 10);

    if (isNaN(todoId)) {
      return NextResponse.json({ error: "유효하지 않은 Todo ID입니다." }, { status: 400 });
    }

    const todo = await prisma.todo.findFirst({
      where: {
        id: todoId,
        userId,
      },
    });

    if (!todo) {
      return NextResponse.json({ error: "Todo를 찾을 수 없습니다." }, { status: 404 });
    }

    await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });

    return NextResponse.json({ message: "Todo가 삭제되었습니다." });
  } catch (error) {
    console.error("Todo 삭제 오류:", error);
    return NextResponse.json({ error: "Todo 삭제에 실패했습니다." }, { status: 500 });
  }
}


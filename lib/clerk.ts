import { auth, currentUser } from "@clerk/nextjs/server";

/**
 * 현재 로그인한 사용자의 ID를 가져옵니다.
 * 인증되지 않은 경우 null을 반환합니다.
 */
export async function getCurrentUserId(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}

/**
 * 현재 로그인한 사용자 정보를 가져옵니다.
 * 인증되지 않은 경우 null을 반환합니다.
 */
export async function getCurrentUser() {
  return await currentUser();
}

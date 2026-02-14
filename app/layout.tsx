import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Y·Start Up 창업교육과정 워크북",
  description: "미래의 문제해결가를 키우는 창의적 여정 - 경험 중심 창업교육 워크북"
};

/** Clerk 키가 실제 발급된 키인지 여부 (플레이스홀더/빈 값이면 false) */
function isClerkKeyConfigured(key: string | undefined): boolean {
  if (!key || typeof key !== "string") return false;
  if (key.startsWith("PLACEHOLDER_")) return false;
  return key.startsWith("pk_test_") || key.startsWith("pk_live_");
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const useClerk = isClerkKeyConfigured(clerkPublishableKey);

  return (
    <html lang="ko">
      <body className={inter.className}>
        {useClerk ? (
          <ClerkProvider publishableKey={clerkPublishableKey!}>{children}</ClerkProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}

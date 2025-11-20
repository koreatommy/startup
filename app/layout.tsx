import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup SaaS Template",
  description: "Next.js 15 + Supabase + Prisma + Clerk 풀스택 SaaS 템플릿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}


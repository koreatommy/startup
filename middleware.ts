import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/account(.*)"]);

/** Clerk 키가 실제 발급된 키인지 (플레이스홀더/미설정이면 false) */
function isClerkConfigured(): boolean {
  const pk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const sk = process.env.CLERK_SECRET_KEY;
  if (!pk || !sk || pk.startsWith("PLACEHOLDER_") || sk.startsWith("PLACEHOLDER_")) return false;
  return pk.startsWith("pk_test_") || pk.startsWith("pk_live_");
}

export default clerkMiddleware(async (auth, req) => {
  if (!isClerkConfigured()) {
    return NextResponse.next();
  }

  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    // Skip public routes (landing page)
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)|sign-in|sign-up|$).*)",
    // Always run for API routes
    "/(api|trpc)(.*)"
  ]
};

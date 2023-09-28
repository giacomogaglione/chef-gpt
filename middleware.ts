import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  debug: true,
  publicRoutes: [
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/sign-out(.*)",
    "/dashboard(.*)",
    "/dashboard",
    "/sign-out",
    "/api(.*)",
  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}

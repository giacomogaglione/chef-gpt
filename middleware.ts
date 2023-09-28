import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  debug: true,
  publicRoutes: [
    "/",
    "/dashboard(.*)",
    "/dashboard",
    "/sign-out",
    "/api(.*)",
  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}

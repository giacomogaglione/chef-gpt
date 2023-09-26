import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
debug: true,
  publicRoutes: ["/", "/api/generate", "/api/save", "/sign-in(.*)", "/sign-up(.*)", "/api(.*)","/dashboard(.*)",],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}

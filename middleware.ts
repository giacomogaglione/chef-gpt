import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
debug: true,
  publicRoutes: ["/", "/api/generate-recipe", "/api/save-recipe", "/api/delete-recipe", "/dashboard/(.*)", "sign-in", "sign-up", "/api(.*)","/dashboard","/sign-out","/(.*)"],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}

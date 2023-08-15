import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="sticky top-[100vh] mx-auto my-4 w-full max-w-2xl items-center justify-center">
      <hr className="border-1 mb-4 w-full border-slate-300 dark:border-slate-700" />
      <div className="text-center text-sm text-slate-600 dark:text-slate-400">
        <span className="mr-2 font-medium">{siteConfig.name}</span>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  )
}

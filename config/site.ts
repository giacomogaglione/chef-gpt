export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Chef Genie",
  url: "https://chef-genie.vercel.app",
  ogImage: "https://chef-genie.vercel.app/og.png",
  description: "Say goodbye to mealtime indecision with Chef Genie.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/faultyled",
    github: "https://github.com/giacomogaglione",
    docs: "https://chef-genie.vercel.app",
  },
}

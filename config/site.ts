export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Chef Genie",
  url: "https://chef-genie.app",
  ogImage: "https://chef-genie.app/og.png",
  description: "An open-source recipe generator powered by OpenAi and ChatGPT.",
  mainNav: [
    {
      title: "Chef Genie Homepage",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/faultyled",
    github: "https://github.com/giacomogaglione",
    docs: "https://chef-genie.app",
  },
}

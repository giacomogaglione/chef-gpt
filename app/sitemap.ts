import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chef-genie.app"
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ]
}

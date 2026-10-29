import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Demo build on Vercel Hobby: keep every crawler out until launch.
 * At launch, flip LAUNCHED to true — /admin stays disallowed either way.
 */
const LAUNCHED = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(LAUNCHED ? { allow: "/" } : {}),
      disallow: LAUNCHED ? ["/admin"] : ["/", "/admin"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}

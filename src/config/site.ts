export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Build a Boss Wiki",
  shortName: "Build a Boss",
  logoText: "BB",
  tagline: "Roblox Codes, Levels, Zones & Boss Builds Guide",
  description: "Build a Boss Wiki with Roblox codes, boss builds, levels, zones, upgrades, parts, battle tips and beginner guides for building stronger custom bosses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://buildaboss.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://buildaboss.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/121716260544429/Build-a-Boss",
  heroVideoId: "",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

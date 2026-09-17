export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: unknown;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "challenges", path: "/challenges", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "updates", path: "/updates", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] as const satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

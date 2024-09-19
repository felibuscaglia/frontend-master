export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Chanta",
  description: "Ecommerce platform.",
  navItems: [
    {
      label: "Shop",
      href: "/",
    },
    {
      label: "Collections",
      href: "/",
    },
    {
      label: "Explore",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

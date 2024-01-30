export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Aetherix",
	description: "Aetherix is a next generation cloud computing platform.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Specs",
      href: "/specs",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Tech",
      href: "/tech",
    },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Specs",
			href: "/specs",
		},
		{
			label: "Services",
			href: "/services",
		},
		{
			label: "Tech",
			href: "/tech",
		},
	],
	links: {
		github: "https://github.com/xanmoy/aetherix",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};

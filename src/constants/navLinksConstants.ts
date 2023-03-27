interface NavLinkType {
  name: string;
  link: string;
}

export const NAVIGATION_LINKS: NavLinkType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Saved",
    link: "/saved",
  },
  {
    name: "Profile",
    link: "/profile",
  },
];

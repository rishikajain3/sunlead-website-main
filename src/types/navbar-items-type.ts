export enum NavbarItemType {
  DROPDOWN = 'DROPDOWN',
  NAVLINK = 'NAVLINK',
}

type Link = string;

type NavItem = {
  navigateTo: Link;
  title: string;
};

export type DropdownItem = { navigateTo: string; title: string };

export type NavBarItems = {
  menuItems?: NavItem[];
  link?: Link;
  subtitle?: string;
  title: string;
  type: NavbarItemType;
};

export type WebsiteMainNavigation = {
  center: NavBarItems[];
};

import { NavBarItems, NavbarItemType } from '../../../types/navbar-items-type';

export const WebsiteNavigation: NavBarItems[] = [
  {
    title: 'Features',
    subtitle: 'Learn how you can make the most out of Sunlead Platform',
    type: NavbarItemType.DROPDOWN,
    menuItems: [
      {
        navigateTo: '',
        title: 'Smart Proposals',
      },
      {
        navigateTo: '',
        title: 'Targeted Campaigns',
      },
    ],
  },
  {
    title: 'Pricing',
    type: NavbarItemType.NAVLINK,
    link: '/pricing',
  },
  {
    title: 'Company',
    subtitle: 'Get to know the vision behind design and team behind Sunlead.',
    type: NavbarItemType.DROPDOWN,
    menuItems: [
      {
        navigateTo: '',
        title: 'About Us',
      },
      {
        navigateTo: '',
        title: 'Contact Us',
      },
      {
        navigateTo: '',
        title: 'Blogs',
      },
    ],
  },
];

export const WebsiteMainNavigation = {
  center: WebsiteNavigation,
};

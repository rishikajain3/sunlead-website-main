import React from 'react';
import { WebsiteMainNavigation } from './nav-items/navbar-main-items-data';
import NavbarDesktop from './navbar-desktop/navbar-desktop';
import NavbarMobile from './navbar-mobile/navbar-mobile';

type Props = {};

export const Navbar: React.FC<Props> = () => {
  return (
    <>
      <NavbarDesktop items={WebsiteMainNavigation} />
      <NavbarMobile items={WebsiteMainNavigation} />
    </>
  );
};

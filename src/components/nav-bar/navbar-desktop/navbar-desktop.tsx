import { Block } from 'baseui/block';
import React from 'react';
import { HeaderNavigation } from 'baseui/header-navigation';
import { NavbarDesktopCenterItems } from './navbar-desktop-center-items';
import { NavbarDesktopRightItems } from './navbar-desktop-right-items';
import { NavbarDesktopLeftItem } from './navbar-desktop-left-item';
import { StyledLink } from 'baseui/link';
import { primitives } from '../../../page-layouts/theme';
import { WebsiteMainNavigation } from '../../../types/navbar-items-type';

type Props = {
  items: WebsiteMainNavigation;
};

const NavbarDesktop: React.FC<Props> = ({ items }) => {
  return (
    <Block display={['none', 'none', 'block', 'block']}>
      <HeaderNavigation
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              borderBottom: 'none',
              backgroundColor: `${primitives.backgroundPrimary}`,
            }),
          },
        }}
      >
        <StyledLink href={'#'}>
          <NavbarDesktopLeftItem />
        </StyledLink>
        <NavbarDesktopCenterItems navbarItems={items.center} />
        <Block marginRight={'scale900'}>
          <NavbarDesktopRightItems />
        </Block>
      </HeaderNavigation>
    </Block>
  );
};

export default NavbarDesktop;

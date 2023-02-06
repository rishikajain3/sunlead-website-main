import React from 'react';
import {
  ALIGN,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import NavLink from '../nav-items/nav-link';

type Props = {};

export const NavbarDesktopRightItems: React.FC<Props> = () => {
  return (
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <NavLink
          navigateTo="https://app.getsunlead.com/signup"
          text="Sign Up"
          textColor={'black'}
        />
      </StyledNavigationItem>
      <StyledNavigationItem>
        <NavLink
          navigateTo="https://app.getsunlead.com/signin"
          text="Login"
          textColor={'black'}
        />
      </StyledNavigationItem>
    </StyledNavigationList>
  );
};

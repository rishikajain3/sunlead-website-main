import React from 'react';
import {
  ALIGN,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import { PLACEMENT } from 'baseui/toast';
import NavLink from '../nav-items/nav-link';
import NavLinkDropdown from '../nav-items/nav-link-dropdown';
import DropDownItems from '../nav-items/dropdown-items';
import {
  DropdownItem,
  NavBarItems,
  NavbarItemType,
} from '../../../types/navbar-items-type';

type NavbarCenterItemsProps = {
  navbarItems: NavBarItems[];
};

export const NavbarDesktopCenterItems: React.FC<NavbarCenterItemsProps> = ({
  navbarItems,
}) => {
  return (
    <StyledNavigationList $align={ALIGN.center}>
      {navbarItems.map(navbarItem => {
        if (navbarItem.type === NavbarItemType.DROPDOWN) {
          return (
            <StyledNavigationItem>
              <NavLinkDropdown
                content={
                  <DropDownItems
                    dropdownItems={navbarItem.menuItems as DropdownItem[]}
                    heading={navbarItem.title}
                    subHeading={navbarItem.subtitle as string}
                  />
                }
                placement={PLACEMENT.bottom}
              >
                {navbarItem.title}
              </NavLinkDropdown>
            </StyledNavigationItem>
          );
        } else if (navbarItem.type === NavbarItemType.NAVLINK) {
          return (
            <StyledNavigationItem>
              <NavLink
                navigateTo=""
                text={navbarItem.title as string}
                textColor={'black'}
              />
            </StyledNavigationItem>
          );
        }
      })}
    </StyledNavigationList>
  );
};

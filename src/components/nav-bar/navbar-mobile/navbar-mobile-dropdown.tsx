import { Block } from 'baseui/block';
import React, { useState } from 'react';
import { NavBarItems } from '../../../types/navbar-items-type';
import NavLink from '../nav-items/nav-link';
import NavItemMobile from './nav-item-mobile';
import NavItemDropdown from './nav-item.dropdown';

type Props = {
  navbarItems: NavBarItems;
};

const NavbarMobileDropdown: React.FC<Props> = ({ navbarItems }) => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setdropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Block
        marginBottom={dropdownOpen ? '0px' : 'scale600'}
        marginTop={'scale600'}
      >
        <NavItemMobile font="MonoParagraphMedium" level={1}>
          <Block onClick={handleDropdownOpen}>{navbarItems.title}</Block>
          <NavItemDropdown
            dropdown={dropdownOpen}
            dropdownHandle={handleDropdownOpen}
          />
        </NavItemMobile>
      </Block>
      <Block
        display={dropdownOpen ? 'flex' : 'none'}
        flexDirection={'column'}
        marginLeft={'scale1400'}
        marginBottom={'scale600'}
      >
        {navbarItems.menuItems.map(navbarItem => (
          <Block marginTop="scale600">
            <NavLink
              navigateTo={navbarItem.navigateTo}
              text={navbarItem.title}
              textColor={'white'}
            />
          </Block>
        ))}
      </Block>
    </>
  );
};

export default NavbarMobileDropdown;

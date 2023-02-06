import { Block } from 'baseui/block';
import { Drawer } from 'baseui/drawer';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import img from '../../../assets/sunlead-logo.png';
import { WebsiteMainNavigation } from '../../../types/navbar-items-type';
import NavLink from '../nav-items/nav-link';
import NavbarDrawer from './navbar-drawer';

type Props = {
  items: WebsiteMainNavigation;
};

const NavbarMobile: React.FC<Props> = ({ items }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu: () => void = () => setOpenMenu(!openMenu);

  return (
    <Block
      display={['flex', 'flex', 'none', 'none']}
      justifyContent={'space-between'}
      paddingRight={'scale600'}
      minHeight={'scale1600'}
      paddingLeft={'scale600'}
      position="relative"
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            boxShadow: `0 ${$theme.sizing.scale0} ${$theme.sizing.scale0} rgba(0, 0, 0, 0.1)`,
          }),
        },
      }}
    >
      <Block marginTop={'auto'} marginBottom={'auto'}>
        <img alt="logo" width={80} src={img} />
      </Block>
      <Block display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Block marginLeft={'scale2400'} marginRight={'scale600'}>
          <NavLink
            navigateTo="https://app.getsunlead.com/signup"
            text="Sign Up"
            textColor={'black'}
          />
        </Block>
        <Block marginRight={'scale600'}>
          <NavLink
            navigateTo="https://app.getsunlead.com/signin"
            text="Login"
            textColor={'black'}
          />
        </Block>
        <Block paddingTop="scale100" onClick={handleOpenMenu}>
          <GiHamburgerMenu />
        </Block>
      </Block>
      <Drawer
        size={'full'}
        isOpen={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor={'left'}
        autoFocus={false}
        overrides={{
          DrawerBody: {
            style: ({ $theme }) => ({
              marginBottom: $theme.sizing.scale800,
              marginLeft: $theme.sizing.scale800,
              marginTop: $theme.sizing.scale800,
              marginRight: $theme.sizing.scale800,
            }),
          },
          DrawerContainer: {
            style: ({ $theme }) => ({
              backgroundColor: $theme.colors.submenuButton,
            }),
          },
          Close: {
            style: () => ({
              fill: 'white',
            }),
          },
        }}
      >
        <NavbarDrawer navbarItems={items.center} />
      </Drawer>
    </Block>
  );
};

export default NavbarMobile;

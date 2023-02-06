import { Block } from 'baseui/block';
import React from 'react';
import { useStyletron } from 'styletron-react';
import NavLink from '../nav-items/nav-link';
import twitterImg from '../../../assets/twitter.png';
import llImg from '../../../assets/ll.png';
import theme from '../../../page-layouts/theme';
import NavbarMobileDropdown from './navbar-mobile-dropdown';
import { NavBarItems, NavbarItemType } from '../../../types/navbar-items-type';

type Props = {
  navbarItems: NavBarItems[];
};

const NavbarDrawer: React.FC<Props> = ({ navbarItems }) => {
  const [css] = useStyletron();

  return (
    <>
      <Block
        color={'black'}
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
      >
        <Block color={theme.colors.contentPrimary} marginTop={'scale1600'}>
          {navbarItems.map((navbarItem, i) => {
            if (navbarItem.type === NavbarItemType.DROPDOWN) {
              if (navbarItems.length - 1 === i) {
                return <NavbarMobileDropdown navbarItems={navbarItem} />;
              } else {
                return (
                  <Block className={css({ borderBottom: '1px dotted #FFF' })}>
                    <NavbarMobileDropdown navbarItems={navbarItem} />
                  </Block>
                );
              }
            } else if (navbarItem.type === NavbarItemType.NAVLINK) {
              return (
                <Block className={css({ borderBottom: '1px dotted #FFF' })}>
                  <Block marginTop={'scale600'} marginBottom={'scale600'}>
                    <NavLink
                      navigateTo={navbarItem.link as string}
                      text={navbarItem.title}
                      textColor={'white'}
                    />
                  </Block>
                </Block>
              );
            }
          })}
        </Block>
        <Block display={'flex'} justifyContent={'space-between'}>
          <Block
            color={theme.colors.contentPrimary}
            className={css({ fontSize: theme.sizing.scale800 })}
          >
            Follow Us :
          </Block>
          <Block display={'flex'}>
            <Block marginLeft={'scale2400'} marginRight={'scale600'}>
              <a href="#">
                <img src={twitterImg} alt={'link'} />
              </a>
            </Block>
            <Block>
              <a href=" https://www.linkedin.com/company/sunlead/about/?viewAsMember=true">
                <img src={llImg} alt={'link'} />
              </a>
            </Block>
          </Block>
        </Block>
      </Block>
    </>
  );
};

export default NavbarDrawer;

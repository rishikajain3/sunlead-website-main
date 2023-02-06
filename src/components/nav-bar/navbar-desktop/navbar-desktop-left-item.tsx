import React from 'react';
import {
  ALIGN,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import { Block } from 'baseui/block';
import img from '../../../assets/sunlead-logo.png';

type Props = {};

export const NavbarDesktopLeftItem: React.FC<Props> = () => {
  return (
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>
        <Block alignItems="center" height="100%" display="flex">
          <img alt="logo" height="30px" src={img} />
        </Block>
      </StyledNavigationItem>
    </StyledNavigationList>
  );
};

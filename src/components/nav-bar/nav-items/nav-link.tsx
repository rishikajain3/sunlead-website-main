import { Block } from 'baseui/block';
import { StyledLink } from 'baseui/link';
import React from 'react';
import { mediumScreenSize } from '../../screen-sizes';

type NavLinkProps = {
  navigateTo: string;
  text: string;
  textColor: string;
};

const NavLink: React.FC<NavLinkProps> = ({ navigateTo, text, textColor }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            fontWeight: 400,
            fontSize: $theme.sizing.scale550,
            ...mediumScreenSize({ fontSize: $theme.sizing.scale600 }),
          }),
        },
      }}
    >
      <StyledLink
        href={navigateTo}
        $style={({ $theme }) => ({
          color: `${textColor} !important`,
          cursor: 'pointer',
          fontWeight: 400,
          textDecoration: 'none',
          ':hover': {
            borderBottom: `2px solid ${$theme.colors.activeUnderlineColor}`,
            color: `${$theme.colors.activeUnderlineColor} !important`,
          },
        })}
      >
        {text}
      </StyledLink>
    </Block>
  );
};

export default NavLink;

import { Block, BlockProps } from 'baseui/block';
import React, { PropsWithChildren } from 'react';

interface NavItemMobileProps extends BlockProps {
  font?: string;
  level: number;
  navigateTo?: string;
}

const NavItemMobile: React.FC<PropsWithChildren<NavItemMobileProps>> = ({
  children,
  font,
  level,
  navigateTo,
  ...otherProps
}) => {
  return (
    <Block
      display={'flex'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      font={font}
      paddingBottom="scale200"
      paddingTop="scale100"
      {...otherProps}
      overrides={{
        Block: {
          style: {
            cursor: 'pointer',
          },
        },
      }}
    >
      {children}
    </Block>
  );
};

export default NavItemMobile;

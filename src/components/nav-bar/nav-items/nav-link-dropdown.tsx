import React, { useState } from 'react';
import { Block } from 'baseui/block';
import { StatefulPopover, StatefulPopoverProps } from 'baseui/popover';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import theme from '../../../page-layouts/theme';
import { mediumScreenSize } from '../../screen-sizes';

interface NavLinkDropdownProps extends StatefulPopoverProps {}

const NavLinkDropdown: React.FC<NavLinkDropdownProps> = ({
  children,
  content,
  placement,
  ...otherProps
}) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <StatefulPopover
      {...otherProps}
      autoFocus
      accessibilityType={'tooltip'}
      content={content}
      onClick={handleDropdown}
      onClose={handleDropdown}
      placement={placement}
      showArrow
      overrides={{
        Inner: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.submenuButton,
          }),
        },
        Arrow: {
          style: ({ $theme }) => ({
            backgroundColor: `${$theme.colors.submenuButton}`,
            padding: theme.sizing.scale600,
          }),
        },
      }}
    >
      <Block
        paddingBottom="scale0"
        overrides={{
          Block: {
            style: ({ $theme }) => ({
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontWeight: 400,
              fontSize: $theme.sizing.scale550,
              ...mediumScreenSize({ fontSize: $theme.sizing.scale600 }),
              ':hover': {
                borderBottom: `2px solid ${$theme.colors.activeUnderlineColor}`,
                color: $theme.colors.activeUnderlineColor,
              },
            }),
          },
        }}
      >
        {children} {dropdown ? <FaAngleUp /> : <FaAngleDown />}
      </Block>
    </StatefulPopover>
  );
};

export default NavLinkDropdown;

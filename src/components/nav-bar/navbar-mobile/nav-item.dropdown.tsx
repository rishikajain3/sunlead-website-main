import { Block, BlockProps } from 'baseui/block';
import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface NavItemDropdownProps extends BlockProps {
  dropdown: boolean;
  dropdownHandle: () => void;
}

const NavItemDropdown: React.FC<NavItemDropdownProps> = ({
  children,
  dropdown,
  dropdownHandle,
  ...otherProps
}) => (
  <Block
    onClick={dropdownHandle}
    paddingTop={'scale100'}
    marginLeft={'scale200'}
    {...otherProps}
  >
    {dropdown ? <FaAngleDown /> : <FaAngleUp />}
  </Block>
);

export default NavItemDropdown;

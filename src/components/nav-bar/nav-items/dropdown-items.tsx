import { Block } from 'baseui/block';
import { LabelSmall, LabelXSmall } from 'baseui/typography';
import React from 'react';
import { useStyletron } from 'styletron-react';
import theme from '../../../page-layouts/theme';
import { DropdownItem } from '../../../types/navbar-items-type';
import NavLink from './nav-link';

type DropDownItemsProps = {
  dropdownItems: DropdownItem[];
  heading: string;
  subHeading: string;
};

const DropDownItems: React.FC<DropDownItemsProps> = ({
  dropdownItems,
  heading,
  subHeading,
}) => {
  const [css] = useStyletron();

  return (
    <Block
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      paddingBottom="scale650"
      paddingLeft="scale800"
      paddingRight="scale800"
      paddingTop="scale650"
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            borderRadius: $theme.sizing.scale400,
            backgroundColor: `${$theme.colors.submenuButton}`,
          }),
        },
      }}
    >
      <Block display={'flex'}>
        <Block flex={'1'} paddingLeft={'scale1200'} paddingBottom={'scale1600'}>
          <Block
            overrides={{
              Block: {
                style: ({ $theme }) => ({
                  fontWeight: '800',
                  fontSize: $theme.sizing.scale550,
                  fontFamily: 'Avenir',
                }),
              },
            }}
            paddingTop={theme.sizing.scale1200}
          >
            {heading}
          </Block>
          <LabelXSmall
            paddingTop={'scale550'}
            color={'grey'}
            paddingRight={'scale1000'}
          >
            {subHeading}
          </LabelXSmall>
        </Block>
        <Block
          flex={'1'}
          className={css({ borderLeft: '0.5px dashed grey' })}
          paddingTop={'scale1200'}
          paddingLeft={'scale1200'}
        >
          <LabelSmall>
            {dropdownItems.map(dropdownItem => (
              <Block paddingBottom="scale800">
                <NavLink
                  navigateTo={dropdownItem.navigateTo}
                  text={dropdownItem.title}
                  textColor={'white'}
                />
              </Block>
            ))}
          </LabelSmall>
        </Block>
      </Block>
    </Block>
  );
};

export default DropDownItems;

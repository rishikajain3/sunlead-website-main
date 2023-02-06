import { createTheme } from 'baseui';

export const primitives = {
  backgroundPrimary: '#FDFDFD',
  primaryFontFamily: 'Avenir',
  grey: '#C1C7D0',
};

export const overrides = {
  colors: {
    contentPrimary: '#ffffff',
    transparentButton: '#00000050',
    activeUnderlineColor: '#F58327',
    submenuButton: '#555555',
  },
  borders: {
    buttonBorderRadius: '4px',
    inputBorderRadius: '4px',
  },
  breakpoints: {
    small: 769,
    medium: 1024,
    large: 1216,
  },
  mediaQuery: {
    small: '@media screen and (min-width: 769px)',
    medium: '@media screen and (min-width: 1024px)',
    large: '@media screen and (min-width: 1216px)',
  },
  typography: {
    MonoParagraphMedium: {
      fontFamily: 'Avenir',
    },
  },
};

export default createTheme(primitives, overrides);

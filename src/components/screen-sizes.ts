import { ConfigurationOverride } from 'baseui/helpers/overrides';

export const smallScreenSize = (cssProperties: ConfigurationOverride) => ({
  '@media screen and (max-width: 576px)': cssProperties,
});

export const mediumScreenSize = (cssProperties: ConfigurationOverride) => ({
  '@media screen and (max-width: 768px)': cssProperties,
});

export const largeScreenSize = (cssProperties: ConfigurationOverride) => ({
  '@media screen and (max-width: 1200px)': cssProperties,
});

export const extraLargeScreenSize = (cssProperties: ConfigurationOverride) => ({
  '@media screen and (min-width: 1201px)': cssProperties,
});


const breakpoint = {
  small: 480,
  get small__max() {
    return this.small - 1;
  },
  medium: 768,
  get medium__max() {
    return this.medium - 1;
  },
  large: 960,
  get large__max() {
    return this.large - 1;
  },
  xlarge: 1200,
  get xlarge__max() {
    return this.xlarge - 1;
  },
};

const mq = {
  small: `@media (min-width: ${breakpoint.small}px)`,
  small__max: `@media (max-width: ${breakpoint.small__max}px)`,
  medium: `@media (min-width: ${breakpoint.medium}px)`,
  medium__max: `@media (max-width: ${breakpoint.medium__max}px)`,
  large: `@media (min-width: ${breakpoint.large}px)`,
  large__max: `@media (max-width: ${breakpoint.large__max}px)`,
  xlarge: `@media (min-width: ${breakpoint.xlarge}px)`,
  xlarge__max: `@media (max-width: ${breakpoint.xlarge__max}px)`,
};

const space = {
  xsmall: 4,
  small: 8,
  base: 16,
  large: 32,
};

export const theme = {
  breakpoint,
  mq,
  space,
};

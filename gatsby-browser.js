import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { CacheProvider } from '@emotion/core';

import { ckCache } from './utils/Wrapper';
import { theme } from './utils/theme';

export const wrapPageElement = ({ element }) => (
  <CacheProvider value={ckCache}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </CacheProvider>
);

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
};

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import {globalStyles} from '../../utils/global'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

const BaseLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <Fragment>
      <Global styles={[globalStyles(theme)]} />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;

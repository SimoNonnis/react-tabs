import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

/**
 * TabContent renders the content of the tab, wrapped in a div.
 * @param {{children: React.Component}} children
 * @return {React.Component}
 */
const TabContent = ({ children }) => <div className={styles.tabContent} >{children}</div>;

TabContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContent;

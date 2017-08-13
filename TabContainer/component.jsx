import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import TabNavigation from '../TabNavigation/component';

import styles from './styles.scss';

/**
 * TabContainer renders content in tabbed style with optional navigation buttons.
 * @param {{children: React.Component}} children
 * @param {number} initialTabIndex
 * @param {bool} navigation
 * @returns {React.Component}
 */
class TabContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTabIndex: this.props.initialTabIndex,
    };

    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  handleTabClick(event) {
    const tabIndex = Number(event.currentTarget.tabIndex);

    this.setState({
      currentTabIndex: tabIndex,
    });
  }

  handleNavigationClick(currentTabIndex) {
    this.setState({
      currentTabIndex,
    });
  }

  render() {
    const { children, navigation } = this.props;
    const { currentTabIndex } = this.state;
    const arrayChildren = React.Children.toArray(children);
    const maxIndex = arrayChildren.length - 1;
    const tabContent = arrayChildren[currentTabIndex];

    return (
      <div>
        <div className={styles.tabs}>
          {arrayChildren.map((child, i) => {
            const isActiveTab = currentTabIndex === i;
            const { label } = child.props;

            return (
              <button
                key={uniqueId()}
                tabIndex={i}
                type="button"
                onClick={this.handleTabClick}
                className={`${styles.tab} ${isActiveTab ? styles.activeTab : ''}`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {tabContent}

        {arrayChildren.length > 1 && navigation && (
          <TabNavigation
            currentIndex={currentTabIndex}
            maxIndex={maxIndex}
            handleNavigationClick={this.handleNavigationClick}
          />
        )}
      </div>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  initialTabIndex: PropTypes.number,
  navigation: PropTypes.bool,
};

TabContainer.defaultProps = {
  initialTabIndex: 0,
  navigation: false,
};

export default TabContainer;

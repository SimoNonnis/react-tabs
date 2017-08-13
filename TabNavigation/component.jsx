import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ArrowLeft, ArrowRight } from '../../Icons/index';

import styles from './styles.scss';

/**
 * TabNavigation renders navigation buttons for the tabs.
 * @param {function(number)} handleNavigationClick
 * @param {number} currentIndex
 * @param {number} maxIndex
 * @returns {React.Component}
 */
class TabNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: this.props.currentIndex,
      maxIndex: this.props.maxIndex,
    };

    this.updateIndex = this.updateIndex.bind(this);
  }

  componentWillReceiveProps({ currentIndex, maxIndex }) {
    this.setState({
      currentIndex,
      maxIndex,
    });
  }

  updateIndex(event) {
    event.preventDefault();
    const index = Number(event.currentTarget.value);
    const { handleNavigationClick } = this.props;
    const { currentIndex } = this.state;

    this.setState({
      currentIndex: currentIndex + index,
    });

    handleNavigationClick(currentIndex + index);
  }

  render() {
    const { currentIndex, maxIndex } = this.state;

    return (
      <div className={styles.navigationGroup}>
        <button
          className={styles.button}
          type="button"
          disabled={currentIndex === 0}
          value={-1}
          onClick={this.updateIndex}
        >
          <ArrowLeft width={20} height={20} />
        </button>
        <button
          className={styles.button}
          type="button"
          disabled={currentIndex === maxIndex}
          value={1}
          onClick={this.updateIndex}
        >
          <ArrowRight width={20} height={20} />
        </button>
      </div>
    );
  }
}

TabNavigation.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
  handleNavigationClick: PropTypes.func.isRequired,
};

export default TabNavigation;

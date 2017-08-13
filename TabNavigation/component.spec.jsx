/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import TabNavigation from './component';

function handleNavigationClick() {}

describe('Test <TabNavigation />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TabNavigation
        currentIndex={0}
        maxIndex={3}
        handleNavigationClick={handleNavigationClick}
      />,
    );
  });

  it('should find <TabNavigation /> component', () => {
    expect(wrapper.find('.navigationGroup')).toHaveLength(1);
  });

  it('should check if required prop currentIndex is present', () => {
    expect(wrapper.props().currentIndex).toEqual(0);
  });

  it('should check if required prop maxIndex is present', () => {
    expect(wrapper.props().maxIndex).toEqual(3);
  });

  it('should check if required prop handleNavigationClick() is present', () => {
    expect(wrapper.props().handleNavigationClick).toEqual(handleNavigationClick);
  });

  it('should find 2 <button /> tags', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('should find 2 svg icons inside navigation buttons', () => {
    expect(wrapper.find('button svg')).toHaveLength(2);
  });

  it('should check if prev button is disabled on mount', () => {
    const prevButton = wrapper.find('button').first();

    expect(prevButton.prop('disabled')).toBe(true);
  });

  it('should check if prev button is enabled after clicking on the next button', () => {
    wrapper.find('button').last().simulate('click');
    const prevButton = wrapper.find('button').first();

    expect(prevButton.prop('disabled')).toBe(false);
  });

  it('should check if next button is enabled on mount', () => {
    const nextButton = wrapper.find('button').last();

    expect(nextButton.prop('disabled')).toBe(false);
  });

  it('should check if next button is disabled when last tab is showing', () => {
    const nextButton = wrapper.find('button').last();
    wrapper.setState({ currentIndex: 3 });

    expect(nextButton.prop('disabled')).toBe(true);
  });
});

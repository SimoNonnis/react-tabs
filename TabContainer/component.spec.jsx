/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import TabContainer from './component';
import TabContent from '../TabContent/component';
import { Home, Size } from '../../Icons/index';
import Indicator from '../../Indicator/index';

describe('Test <TabContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TabContainer navigation>
        <TabContent
          initialTabIndex={0}
          label={
            <div>
              Type & Price
            </div>
          }
        >
          The 1st tab content is here
        </TabContent>
        <TabContent
          label={
            <div>
              Size & Room
            </div>
          }
        >
          The 2nd tab content is here
        </TabContent>
      </TabContainer>);
  });

  it('should find 2 <button /> with class .tab', () => {
    expect(wrapper.find('button.tab')).toHaveLength(2);
  });

  it('should find a class .activeTab on last Tab if clicked', () => {
    wrapper.find('button.tab').last().simulate('click');
    const lastTab = wrapper.find('button.tab').last();

    expect(lastTab.find('.activeTab')).toHaveLength(1);
  });

  describe('Test a single Tab', () => {
    let tab;

    beforeEach(() => {
      tab = wrapper.find('button.tab').first();
    });

    it('should find a class .activeTab on first render', () => {
      expect(tab.find('.activeTab')).toHaveLength(1);
    });

    it('should find label text to be "Type & Price"', () => {
      expect(tab.find('div').text()).toEqual('Type & Price');
    });
  });

  it('should find <TabContent /> component', () => {
    expect(wrapper.find('.tabContent')).toHaveLength(1);
  });

  it('should find <TabNavigation /> component', () => {
    expect(wrapper.find('.navigationGroup')).toHaveLength(1);
  });
});

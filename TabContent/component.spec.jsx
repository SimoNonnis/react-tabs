/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import TabContent from './component';

describe('Test <TabContent />', () => {
  const wrapper = shallow(<TabContent >The 1st tab content is here</TabContent>);

  it('should find <TabContent /> component', () => {
    expect(wrapper.find('.tabContent')).toHaveLength(1);
  });
});

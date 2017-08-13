import React from 'react';

import { TabContent, TabContainer } from './index';
import { Home, Size, Bulb, Pin } from '../Icons/index';
import Indicator from '../Indicator/index';

import styles from './styles.scss';

const customTabsStyles = {
  padding: '10px',
  backgroundColor: '#F6F6F6',
};

function TabsDemo() {
  return (
    <div style={customTabsStyles}>
      <TabContainer navigation >
        <TabContent
          label={
            <div>
              <Home width={20} height={20} />
              <span className={styles.labelText}>Type & Price</span>
              <span className={styles.indicator}><Indicator status="ready" /></span>
            </div>
          }
        >
          The 1st tab content is here
        </TabContent>
        <TabContent
          label={
            <div>
              <Size width={20} height={20} />
              <span className={styles.labelText}>Size & Room</span>
              <span className={styles.indicator}><Indicator status="ready" /></span>
            </div>
          }
        >
          The 2nd tab content is here
        </TabContent>
        <TabContent
          label={
            <div>
              <Bulb width={20} height={20} />
              <span className={styles.labelText}>Utilities & Features</span>
              <span className={styles.indicator}><Indicator status="ready" /></span>
            </div>
          }
        >
          The 3th tab content is here
        </TabContent>
        <TabContent
          label={
            <div>
              <Pin width={20} height={20} />
              <span className={styles.labelText}>Map & Directions</span>
              <span className={styles.indicator}><Indicator status="awaiting" /></span>
            </div>
          }
        >
          The 4th tab content is here
        </TabContent>
      </TabContainer>
    </div>
  );
}

export default TabsDemo;

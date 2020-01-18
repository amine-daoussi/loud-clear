import React from 'react';
import { Tabs  } from 'antd'
import './customizedTabs.scss'
const { TabPane } = Tabs;

const CustomizedTabs = ({tabMenu}) => {
    return (
        <div className ="customized-tabs">
              <Tabs
      defaultActiveKey= "1"
      className="customized-tabs__tabs-container"
    >
      {tabMenu.map(tab => (
        <TabPane
          tab={
            <div
              className="customized-tabs__title"
            >
            {tab.title}
            {console.log(tab)}
            {console.log(tab.title)}

            </div>
          }
          key={tab.id}
        >
          {tab.content}
        </TabPane>
      ))}
    </Tabs>
        </div>
    );
}

export default CustomizedTabs;

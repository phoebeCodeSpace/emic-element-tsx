import * as React from 'react';
import { Tabs, Button } from '../component';
const TabPane = Tabs.TabPane;

export interface AppProps {
}

export interface AppState {
  key?: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      key: 'vue'
    };
  }

  onChangeCallback = (key: string) => {
    console.log('切换至' + key);
  }

  changeKey = () => {
    this.setState({
      key : 'react'
    });
  }

  render() {
    const tabsStyle = {
      width: 500,
      margin: '0 auto'
    };
    const { key } = this.state;
    return (
      <div style={tabsStyle}>
        <h3>line切换</h3>
        <Tabs activeKey={key} onChange={this.onChangeCallback}>
          <TabPane tab="react" key="react">
            tab 1 contents
          </TabPane>
          <TabPane tab="vue" key="vue" disabled={true}>
            tab 2 contents
          </TabPane>
          <TabPane tab="angular" key="angular">
            tab 3 contents
          </TabPane>
        </Tabs>  

        <Button onClick={this.changeKey}>切换至react</Button>
      </div>
    );
  }
}

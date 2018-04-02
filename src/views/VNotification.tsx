import * as React from 'react';
import { Notification } from '../component';

export interface AppProps {
}

export interface AppState {
}

export default class VNotification extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    //     this.state = {
    // }
  }
  componentDidMount() {
    console.log('Notification');
    Notification.info({
      title: '134',
      duration: null
    });
  }
  render() {
    // const noticeProps = {
    //   title: '提示信息',
    //   description: '详细说明'
    // };
    return (
      <div>
        {/* <Notification {...noticeProps}/> */}
      </div>
    );
  }
}

import * as React from 'react';

export interface TabPaneProps {
  tab: string;
  key: string;
  disabled?: boolean;
}


export interface TabPaneState {
}

export default class TabPane extends React.Component<TabPaneProps, TabPaneState> {
  constructor(props: TabPaneProps) {
    super(props);

    //     this.state = {
    // }
  }
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    const {children} = this.props;
    
    return (
      <div>
        {children}
      </div>
    );
  }
}

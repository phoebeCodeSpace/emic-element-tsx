import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Button from '../component/button';

export interface AppProps {
  // showProp?: string;
}

export interface AppState {
  visible?: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  }
  constructor(props: AppProps) {
    super(props);

    this.state = {
      visible: true
    };
  }

  render() {
    const { visible } = this.state;
    const style = {
      backgroundColor: 'red', width: 100, height: 100, color: '#fff',
    };
    const transitionProps = {
      transitionName: 'example',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 1000, 
    };
    const dom = visible ? <div style={style}>Animate</div> : null;
    return (
      <div>
        <ReactCSSTransitionGroup  {...transitionProps}>
          {dom}
        </ReactCSSTransitionGroup>
        <Button onClick={this.toggle}>toggle</Button>
      </div>
    );
  }
}
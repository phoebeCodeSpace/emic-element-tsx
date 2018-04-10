import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { NotificationPlacement } from './types';
import Notice from './Notice';

interface NotificationProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  duration?: number | null;
  placement?: NotificationPlacement;
  getContainer?: React.ReactNode;
}

interface NotificationState {
  visible: boolean;
}

class Notification extends React.Component<NotificationProps, NotificationState> {

  static defaultProps = {
    duration: 3.5
  };
  static propTypes = {

  };
  constructor(props: NotificationProps) {
    super(props);

    this.state = {
      visible: true
    };
  }
  componentDidMount() {
    const { duration } = this.props;
    if (duration) {
      setTimeout(
        () => {
          this.setState({
            visible: false
          });
        },
        duration * 1000
      );
    }
  }
  componentDidLeave() {
    console.log('componentDidLeave');
  }
  render() {
    const self = this;
    const { title, description } = this.props;
    const { visible } = this.state;
    const transitionProps = {
      transitionName: 'slide-up',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };
    const noticeProps = {
      title, description,
      close(value: boolean) {
        self.setState({
          visible: value
        });
      }
    };
    return (
      <ReactCSSTransitionGroup {...transitionProps}>
        {
          visible ?
            <Notice {...noticeProps} />
            :
            null
        }
      </ReactCSSTransitionGroup>
    );
  }
}

// const newInstance = (properties: NotificationProps) => {
//   const { getContainer, ...props } = properties;
//   const div = document.createElement('div');

//   ReactDOM.render(<Notification {...props}/>, div);
// };

export default Notification;
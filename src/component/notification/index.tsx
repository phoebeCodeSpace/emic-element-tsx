import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import PropTypes from 'prop-types';
// import Icon from '../icon';
// import { prefixCls } from '../../utils/config';
// import { classNames } from '../../utils/assist';
import Notice from './Notice';


export interface NotificationProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  duration?: number | null;
}

export interface NotificationState {
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
      visible : true
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
    // const noticePrefixCls = `${prefixCls}-notice`;
    // const classes = classNames()
    const transitionProps = {
      transitionName: 'slide-up',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };
    const noticeProps = {
      title, description,
      close(value: boolean){ 
        self.setState({
          visible: value         
        });
      }
    };
    return (
      <ReactCSSTransitionGroup {...transitionProps}>
        {
          visible ?
          <Notice {...noticeProps}/>
          :
          null
        }
      </ReactCSSTransitionGroup>
    );
  }
}
const div = document.createElement('div');

export default {
  info(opts: NotificationProps) {
    document.body.appendChild(div);
    const defaultProps = {
      ...opts
    };
    return ReactDOM.render(<Notification {...defaultProps}/>, div);
  }
};
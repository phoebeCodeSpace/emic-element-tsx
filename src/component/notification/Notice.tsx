import * as React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

// import PropTypes from 'prop-types';
import Icon from '../icon';
import { prefixCls } from '../../utils/config';
import { classNames } from '../../utils/assist';

export type NoticeType = 'succuss' | 'info' | 'warning';

export interface NoticeProps {
  icon?: React.ReactNode;
  type?: NoticeType;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  close: (value: boolean) => void;
}

export interface NoticeState {

}

export default class Notice extends React.Component<NoticeProps, NoticeState> {
  static defaultProps = {

  };
  static propTypes = {

  };
  constructor(props: NoticeProps) {
    super(props);

    // this.state = {
    // };
  }
  componentWillUnmount() {
    console.log('componentDidLeave');
  }
  render() {
    const { className, title, description, close, icon, type } = this.props;
    // console.log(this.props.close);
    const noticePrefixCls = `${prefixCls}-notification`;
    const classes = classNames(className, {
      [noticePrefixCls]: true
    });
    return (
      <ReactTransitionGroup component="div" className={classes}>

        <Icon type="close" onClick={close.bind(this, false)}/>
        {icon ? icon : (type ? <Icon type={type}/> : null)}
        <div className={`${noticePrefixCls}-content`}>
          <h4>{title}</h4>
          <p>{description}</p>          
        </div>
      </ReactTransitionGroup>
    );
  }
}

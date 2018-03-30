import * as React from 'react';
import { prefixCls } from '../../utils/config';
import { classNames } from '../../utils/assist';

export interface IconProps {
  type: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

export default class Icon extends React.Component<IconProps> {
  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const {onClick} = this.props;
    if (onClick) {
      onClick(e);
    }
  }
  render() {
    const { className, type } = this.props;
    const classes = classNames(className, {
      [`icon-${type}`]: type,
      [`${prefixCls}-icon`]: true
    });
    return (
      <i className={classes} onClick={this.handleClick}/>
    );
  }
}

import * as React from 'react';
import { PropTypes } from 'prop-types';
import Icon from '../icon';
import { prefixCls } from '../../utils/config';
import { classNames } from '../../utils/assist';

export type ButtonType = 'primary' | 'info' | 'danger';
export type ButtonSize = 'small' | 'default' | 'large';

export interface ButtonProps {
  type?: ButtonType;
  plain?: boolean;
  htmlType?: string;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  iconType?: string;
  onClick?: React.FormEventHandler<HTMLButtonElement>;
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    type: 'primary',
    size: 'default'
  };

  static propTypes = {
    type: PropTypes.string,
    htmlType: PropTypes.oneOf(['submit', 'reset']),
    size: PropTypes.oneOf(['small', 'default', 'large']),
    className: PropTypes.string,
    iconType: PropTypes.string,
    onClick: PropTypes.func
  };

  constructor(props: ButtonProps) {
    super(props);
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const onClick = this.props.onClick;
    if (onClick) {
      onClick(e);
    }
  }

  render() {
    const { type, htmlType, size, children, iconType, plain , className } = this.props;
    const btnPrefixCls = `${prefixCls}-btn`;
    const classes = classNames(className, {
      [`${btnPrefixCls}-${type}`]: type,
      [`${btnPrefixCls}-${size}`]: size,
      [`${btnPrefixCls}-plain`]: plain,
    });
    const IconNode = iconType ? <Icon type={iconType} /> : null;
    return (
        <button className={classes} type={htmlType} onClick={this.handleClick}>
          {IconNode}{children}
        </button>
    );
  }
}

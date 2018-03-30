import * as React from 'react';
import PropTypes from 'prop-types';
import { prefixCls } from '../../utils/config';
import { classNames } from '../../utils/assist';
import Icon from '../icon';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  type?: AlertType;
  showIcon?: boolean;
  message?: string;
  description?: string;
  closeable?: boolean;
  onClosed?: React.MouseEvent<HTMLAnchorElement>;
}

export interface AlertState {
  visible?: boolean;
}

export default class App extends React.Component<AlertProps, AlertState> {
  static defaultProps = {
    showIcon: true,
    closeable: false
  };
  static propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    showIcon: PropTypes.bool,
    closeable: PropTypes.bool
  };
  constructor(props: AlertProps) {
    super(props);

    this.state = {
      visible: true
    };
  }

  close = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // const { onClosed } = this.props;
    // if (onClosed) {
    //   onClosed(e);
    // }
    this.setState({
      visible: false
    });
  }

  render() {
    const { type = 'info', message, children, showIcon, closeable, description} = this.props;
    // const { visible } = this.state;
    const alertPrefixCls = `${prefixCls}-alert`;
    const wrapClasses = classNames(alertPrefixCls, {
      [`${alertPrefixCls}-${type}`] : type,
      [`${alertPrefixCls}-banner`]: description,
      // [`slide-up`]
    });
    const iconTypes = {
      'info': 'information',
      'success': 'success',
      'warning': 'warning',
      'error': 'wrong'
    };
    return (
      <div className={wrapClasses}>
        {showIcon ? <Icon type={iconTypes[type]} /> : null}
        {
          children ?
          (<div className={`${alertPrefixCls}-box`}>{children}</div>) :
          (
            <div className={`${alertPrefixCls}-box`}>
              <p className={`${alertPrefixCls}-message`}>{message}</p>
              <p className={`${alertPrefixCls}-description`}>{description}</p>
            </div>
          )
        }
        {closeable ? <Icon type="close" onClick={this.close}/> : null}
      </div>
    );
  }
}

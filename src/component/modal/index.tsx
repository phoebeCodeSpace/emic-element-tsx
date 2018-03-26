import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';
import { prefixCls } from '../../utils/config';
import { classNames } from '../../utils/assist';

import './index.less';

export interface AppProps {
  modalPrefixCls?: string;
  visible?: boolean;

  maskClosable?: boolean;
  // 弹框容器属性
  wrapClassName?: string;
  width?: number | string;
  // header 属性
  title?: string | React.ReactNode;
  closable?: boolean;
  // footer 属性
  footer?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  cancelBtn?: boolean;
  reviseBtn?: boolean;  // 是否置换按钮位置，默认确认按钮在右
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
}
export interface AppState {
  visible?: boolean;
}
export default class App extends React.Component<AppProps, AppState> {
  static defaultProps = {
    modalPrefixCls: `${prefixCls}-modal`,
    visible: false,
    closable: true,
    width: 520,
    title: '标题',
    okText: '确定',
    cancelText: '取消',
    cancelBtn: true,
    maskClosable: true
  };
  static propTypes = {
    visible: PropTypes.bool,
    maskClosable: PropTypes.bool,
    wrapClassName: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.node,
    footer: PropTypes.node,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    cancelBtn: PropTypes.boolean,
    reviseBtn: PropTypes.boolean,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
  };
  constructor(props: AppProps) {
    super(props);

    this.state = {
      visible: props.visible
    };
  }

  componentWillReceiveProps(next: AppProps) {
    this.setState({
      visible: next.visible
    });
  }

  handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(e);
    }
  }
  handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.close(e);
  }
  close = (e: React.MouseEvent<HTMLElement>) => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel(e);
    }
  }
  getHeaderElement() {
    const { title, modalPrefixCls, closable } = this.props;
    return (
      <header className={`${modalPrefixCls}-header`}>
        <div>{title}</div>
        {closable ? <Icon type="close" onClick={this.close}/> : null}
      </header>
    );
  }
  getFooterElement() {
    const { modalPrefixCls, footer, okText, cancelText, cancelBtn, reviseBtn } = this.props;
    const okBtnDom = <Button onClick={this.handleOk}>{okText}</Button>;
    const cancelBtnDom = cancelBtn ? <Button onClick={this.handleCancel} plain={true}>{cancelText}</Button> : null;
    return (
      footer ?
        footer
        :
        (
          <footer className={`${modalPrefixCls}-footer`}>
            {
              reviseBtn ?
                (<div>{okBtnDom}{cancelBtnDom}</div>)              
                :
                (<div>{cancelBtnDom}{okBtnDom}</div>)
            }
          </footer>
        )
    );
  }
  render() {
    const { modalPrefixCls, children, width, wrapClassName, maskClosable } = this.props;
    const { visible } = this.state;
    const classes = classNames(wrapClassName, {
      [`${modalPrefixCls}-content`]: true,
      [`${modalPrefixCls}-show`]: visible
    });
    const warpClass = classNames(`${modalPrefixCls}-wrap`, {
      [`show`]: visible
    });
    return (
      <div className={warpClass}>
        <div className={`${modalPrefixCls}-mask`} onClick={maskClosable ? this.close : undefined} />
        <div className={classes} style={{ width }}>
          {this.getHeaderElement()}
          <div className={`${modalPrefixCls}-body`}>
            {children}
          </div>
          {this.getFooterElement()}
        </div>
      </div>
    );
  }
}

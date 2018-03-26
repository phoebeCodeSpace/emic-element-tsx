# modal

👀 [source](///)

👀 [preview](///)

## 使用方法

``` js
import * as React from 'react';

import { Button, Modal } from '../component';

export interface AppProps {

}
export interface AppState {
  visible1: boolean;
}

class VModal extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      visible1 : false
    };
  }
  openModal = () => {
    this.setState({
      visible1: true
    });
  }
  closeModal = () => {
    this.setState({
      visible1: false
    });
  }
  render() {
    return (
      <div className="App">
        <p>基本用法：</p>
        <Button onClick={this.openModal}>Open</Button>
        <Modal visible={this.state.visible1} onOk={this.closeModal} onCancel={this.closeModal}>
          <p>something text...</p>
          <p>something text...</p>
        </Modal>
      </div>
    );
  }
}

export default VModal;


```

## API

参数 |说明 | 类型 | 默认值
---|--- |--- |---
visible | 对话框是否可见 | boolean | false
title | 标题 | string | 标题
closable | 是否显示右上角关闭按钮 | boolean | true
maskClosable | 点击蒙层是否允许关闭 | boolean | true
wrapClassName | 弹框容器的类名 | string | -
width | 弹框容器的宽度 | number/string | 520
footer | 自定义footer | ReactNode | -
okText | 确定按钮文字 | string | 确定
cancelText | 取消按钮文字 | string | 取消
cancelBtn | 是否需要确定按钮 | boolean | true
reviseBtn | 是否置换按钮位置，默认确认按钮在右 | boolean | true
onOk | 点击确定按钮事件 | function | 无
onCancel | 点击取消按钮事件 | function | 无

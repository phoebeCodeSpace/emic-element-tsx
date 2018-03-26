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

import * as React from 'react';

import { Button } from '../component';

class VButton extends React.Component {
  showCategory() {
    console.log('show category');
  }
  render() {
    return (
      <div className="App">
        <p>type</p>
        <Button>primary</Button>
        <Button type="info">info</Button>
        <Button type="danger">danger</Button>
        <p>iconType</p>
        <Button iconType="category" onClick={this.showCategory}>目录</Button>
      </div>
    );
  }
}

export default VButton;

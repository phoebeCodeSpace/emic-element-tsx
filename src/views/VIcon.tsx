import * as React from 'react';

import Icon from '../component/icon';

class VIcon extends React.Component {
  showCategory() {
    console.log('show category');
  }
  render() {
    return (
      <div className="App">
        <Icon type="all" />
      </div>
    );
  }
}

export default VIcon;

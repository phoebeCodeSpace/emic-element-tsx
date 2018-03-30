import * as React from 'react';

import Icon from '../component/icon';

class VIcon extends React.Component {
  showCategory(e: React.MouseEvent<HTMLAnchorElement>) {
    console.log('show category');
  }
  render() {
    return (
      <div className="App">
        <Icon type="all" onClick={this.showCategory}/>
      </div>
    );
  }
}

export default VIcon;

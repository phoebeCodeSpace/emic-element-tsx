import * as React from 'react';
import '../../assets/fonts/iconfont.less';

export interface IconProps {
  type: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default class Icon extends React.Component<IconProps> {
  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const {onClick} = this.props;
    if (onClick) {
      onClick(e);
    }
  }
  render() {
    return (
      <i className={`iconfont icon-${this.props.type}`} onClick={this.handleClick}/>
    );
  }
}

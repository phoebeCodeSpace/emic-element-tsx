import * as React from 'react';
import { is, fromJS } from 'immutable';
// import * as ReactDOM from 'react-dom';
import TabPane, { TabPaneProps } from './TabPane';
import { prefixCls } from '../../utils/config';
import { ReactToArray, classNames } from '../../utils/assist';

const prefixClsTabs = `${prefixCls}-tabs`;

export interface TabsProps {
  activeKey?: string;            // 当前激活tab key
  onChange?: (key: string) => void;
}

export interface TabsState {
  keyIndex: number;
  currentKey?: string;
  activeBarLeft: number;
  activeBarWidth: number;
}


export default class Tabs extends React.Component<TabsProps, TabsState> {
  static TabPane = TabPane as  React.ClassicComponentClass<TabPaneProps>;

  constructor(props: TabsProps) {
    super(props);

    this.state = {
      keyIndex: 0,
      currentKey: this.props.activeKey,
      activeBarLeft : 0,
      activeBarWidth: 0
    };
  }
  setPosition = (key: string) => {
    const { children, onChange} = this.props;
    const childDOM = this[key as string];
    const childDOMBox = childDOM.getBoundingClientRect();
    const keyIndex = ReactToArray(children).findIndex(child => child.key === key);
    this.setState({
      keyIndex,
      currentKey: key,
      activeBarLeft: childDOM.offsetLeft,
      activeBarWidth: childDOMBox.width
    });
    if (onChange) {
      onChange(key);
    }
  }

  changeTab = (child: React.ReactElement<any> ) => {
    this.setPosition(child.key as string);
  }
  
  renderTabBar() {
    const { children } = this.props; 
    const { currentKey, activeBarLeft, activeBarWidth} = this.state;

    const activeBarStyle = {
      width: activeBarWidth,
      left: activeBarLeft
    };

    
    
    return (
      <div className={`${prefixClsTabs}-bar-wrap`}>
        <div className="active-bar" style={activeBarStyle}/>
        <ul>
        {React.Children.map(children as React.ReactNode, (child: React.ReactElement<any> , index) => {
          
          const tabBarItemStyle = classNames(`${prefixClsTabs}-bar-item`, {
            ['active']: currentKey === child.key,
            ['disabled']: child.props.disabled
          });
          const event = !child.props.disabled ? { onClick: this.changeTab.bind(this, child)} : null;
          return (
            <li
              {...event}
              key={child.key as string}
              ref={(node) => this[child.key as string] = node}
              className={tabBarItemStyle}
            >
              {child.props.tab}
            </li>
          );
        }   

        )}
        </ul>        
      </div>

    );
  }
  renderTabContent() {
    const { children } = this.props; 
    const { currentKey, keyIndex } = this.state;
    const contentWrapStyle = {
      marginLeft: `${- (keyIndex * 100)}%`,
      width: `${(ReactToArray(children).length * 100)}%`
    };
    
    return (
      <div className={`${prefixClsTabs}-content-wrap`} style={contentWrapStyle}>
        {React.Children.map(children as React.ReactNode, (child: React.ReactElement<any> , index) =>  {
          const contentItemCls = classNames(`${prefixClsTabs}-content-item`, {
            ['active']: currentKey === child.key
          });
          return (
            <div className={contentItemCls}>
              {child.props.children}
            </div>
          );        
        } 
        )}      
      </div>

    );
  }

  componentDidMount() {
    const { children, activeKey } = this.props;
    const defaultKey = (activeKey || ReactToArray(children)[0].key) as string;
    this.setPosition(defaultKey);
  }
  shouldComponentUpdate(nextProps: TabsProps, nextState: TabsState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }

 
  componentWillReceiveProps(next: TabsProps) {
    this.setPosition(next.activeKey as string);
  }

  render() {
    return (
      <div className={`${prefixClsTabs}`}>
        {this.renderTabBar()}
        {this.renderTabContent()}
      </div>
    );
  }
}

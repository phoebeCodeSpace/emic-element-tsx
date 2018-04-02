import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// const transitions = {
//   'transition': 'transitionend',
//   'OTransition': 'oTransitionEnd',
//   'MozTransition': 'transitionend',
//   'WebkitTransition': 'webkitTransitionEnd'
// };
// const transitionEvent = (() => {
//   for (let t in transitions) {
//     return (element.style[t] !== undefined) && transitions[t]
//   }
// })();

export interface AnimateProps {
  children: React.ReactElement<any>;
  showProp: string;
  transitionName: string;
}

export interface AnimateState {

}

export default class Animate extends React.Component<AnimateProps, AnimateState> {
  static propTypes = {
    children: PropTypes.node,
    showProp: PropTypes.string,
    transitionName: PropTypes.string
  }; 
  constructor(props: AnimateProps) {
    super(props);

    //     this.state = {
    // }
  }

  setTransition = (node: React.ReactElement<any>) => {
    node.props.style.transition = this.props.transitionName;    
    
    // transitions.
    // const transitionEvent = 
    // EventTarget.addEventListener('transitionend', function() {
    //   console.log('transitionend');
    // });
    // node.addEventListener('transitionend',()=>{

    // })
  }

  componentWillReceiveProps(nextProps: AnimateProps) {
    const { children, showProp } = nextProps;
    const node = ReactDOM.findDOMNode(this);
    if (children && !children.props[showProp]) {
      node.classList.add(this.props.transitionName);
      // node.addEventListener()
      console.log(node);
      // node.getDOMNode().addEventListener('transitionend', this.onTransitionEnd, false);
      // this.onTransitionEnd()
    }
  }

  componentDidMount() {
    const { children, showProp } = this.props;
    if (children) {
      console.log(children.props[showProp]);
    }
  }
  render() {
    return (
        this.props.children
    );
  }
}
import * as React from 'react';

export const classNames = (className: string = '' , a: object) => {
  let classes: Array<string> = [];
  classes.push(className);
  Object.keys(a).forEach(item => {
    if ( a[item] ) {
      classes.push(item);      
    }
  });
  return classes.join(' ');
};

export const ReactToArray = (children: React.ReactNode) => {
  let childrenToArray: React.ReactElement<any>[] = [];
  React.Children.forEach(children as React.ReactNode, (child: React.ReactElement<any>, index: number) => {
    childrenToArray.push(child);
  });
  return childrenToArray;
};

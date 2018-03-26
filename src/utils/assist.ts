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
export default {
  saveRef(name: string) {
    return (node: string) => { 
      this[name] = node;
    };
  }
};
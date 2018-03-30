import * as React from 'react';
import { Alert } from '../component';

export interface AppProps {
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    //     this.state = {
    // }
  }

  render() {
    return (
      <div style={{padding: 20}}>
        <Alert closeable={true}>information</Alert>
        <Alert message="information"/>
        <Alert type="success">success</Alert>
        <Alert type="warning">warning</Alert >
        <Alert type="error">error</Alert >
        <Alert message="information" description="descriptiondescriptiondescriptiondescriptiondescription"/>        
      </div>
    );
  }
}

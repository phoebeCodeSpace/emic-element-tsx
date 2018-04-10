import * as React from 'react';

export interface MessageProps {
}

export interface MessageState {
}

export default class Message extends React.Component<MessageProps, MessageState> {
  constructor(props: MessageProps) {
    super(props);

    //     this.state = {
    // }
  }

  render() {
    return (
      <div>
        message
      </div>
    );
  }
}

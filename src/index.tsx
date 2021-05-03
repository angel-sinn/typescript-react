import React from 'react';
import ReactDOM from 'react-dom';

// structure of props
interface AppProps {
  // optional property - add ? after property
  color?: string;
}

// reference interface as generic
class App extends React.Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

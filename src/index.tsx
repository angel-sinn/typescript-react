import React from 'react';
import ReactDOM from 'react-dom';

// structure of props
interface AppProps {
  // optional property - add ? after property
  color?: string;
}

// structure of state
interface AppState {
  counter: number;
}

// reference interface as generic
class App extends React.Component<AppProps, AppState> {
  // state = { counter: 0 }; // overrides state property defined in component

  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

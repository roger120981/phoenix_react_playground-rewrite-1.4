import * as React from 'react';
import { Link } from 'react-router-dom';

import Main from '../components/Main';

// Interface for the Counter component state
interface CounterState {
  currentCount: number;
}

const initialState = { currentCount: 0 };

export default class CounterPage extends React.Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);

    // Set the initial state of the component in a constructor.
    this.state = initialState;
  }

  public render(): JSX.Element {
    return (
      <Main>
        <h1>Contador</h1>
        <p>
          Este contador es un simple ejemplo de lo que se puede hacer con los componentes de Reactjs
        </p>
        <p>
          Cuenta actual: <strong>{this.state.currentCount}</strong>
        </p>
        {/* We apply an onClick event to these buttons to their corresponding functions */}
        <button className="button" onClick={this.incrementCounter}>
          Incrementar contador
        </button>{' '}
        <button
          className="button button-outline"
          onClick={this.decrementCounter}
        >
          Restar contador
        </button>{' '}
        <button className="button button-clear" onClick={this.resetCounter}>
          Resetear contador
        </button>
        <br />
        <br />
        <p>
          <Link to="/">Volver a la portada</Link>
        </p>
      </Main>
    );
  }

  private incrementCounter = () => {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  };

  private decrementCounter = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
  };

  private resetCounter = () => {
    this.setState({
      currentCount: 0
    });
  };
}

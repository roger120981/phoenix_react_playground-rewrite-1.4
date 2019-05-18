import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Main from '../components/Main';

const HomePage: React.FC<RouteComponentProps> = () => (
  <Main>
    <section className="phx-hero">
      <p>
        <Link className="button" to="/counter">
          Ejemplo de contador
        </Link>{' '}
        <Link className="button button-outline" to="/fetch-data">
          Ejemplo de API
        </Link>
      </p>
    </section>

  </Main>
);

export default HomePage;

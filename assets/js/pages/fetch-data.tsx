import * as React from 'react';
import { Link } from 'react-router-dom';

import Main from '../components/Main';

// The interface for our API response
interface ApiResponse {
  data: Language[];
}

// The interface for our Language model.
interface Language {
  id: number;
  name: string;
  proverb: string;
}

interface FetchDataExampleState {
  languages: Language[];
  loading: boolean;
}

export default class FetchDataPage extends React.Component<
  {},
  FetchDataExampleState
  > {
  constructor(props: {}) {
    super(props);
    this.state = { languages: [], loading: true };

    // Get the data from our API.
    fetch('/api/languages')
      .then(response => response.json() as Promise<ApiResponse>)
      .then(data => {
        this.setState({ languages: data.data, loading: false });
      });
  }

  private static renderLanguagesTable(languages: Language[]) {
    return (
      <table>
        <thead>
          <tr>
            <th>Idioma</th>
            <th>Proverbio de ejemplo</th>
          </tr>
        </thead>
        <tbody>
          {languages.map(language => (
            <tr key={language.id}>
              <td>{language.name}</td>
              <td>{language.proverb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  public render(): JSX.Element {
    const content = this.state.loading ? (
      <p>
        <em>Cargando...</em>
      </p>
    ) : (
        FetchDataPage.renderLanguagesTable(this.state.languages)
      );

    return (
      <Main>
        <h1>Obtener datos</h1>
        <p>
          Este componente demuestra como obtener datos desde un enpoint con Phoenix
        </p>
        {content}
        <br />
        <br />
        <p>
          <Link to="/">Volver a la portada</Link>
        </p>
      </Main>
    );
  }
}

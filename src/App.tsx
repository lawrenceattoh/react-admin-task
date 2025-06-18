import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';

import BookList from './pages/Books/BookList';
import BookEdit from './pages/Books/BookEdit';
import BookCreate from './pages/Books/BookCreate';
import BookShow from './pages/Books/BookShow';

import AuthorList from './pages/Authors/AuthorList';
import AuthorEdit from './pages/Authors/AuthorEdit';
import AuthorCreate from './pages/Authors/AuthorCreate';
import AuthorShow from './pages/Authors/AuthorShow';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="books"
      list={BookList}
      edit={BookEdit}
      create={BookCreate}
      show={BookShow}
    />
    <Resource
      name="authors"
      list={AuthorList}
      edit={AuthorEdit}
      create={AuthorCreate}
      show={AuthorShow}
    />
  </Admin>
);

export default App;

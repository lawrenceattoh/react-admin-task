import {
  List,
  Datagrid,
  TextField,
  NumberField,
} from 'react-admin';

const AuthorList = () => (
  <List title="Authors">
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="birthYear" options={{ useGrouping: false }} />
    </Datagrid>
  </List>
);

export default AuthorList;

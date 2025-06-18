import { Show, SimpleShowLayout, TextField, NumberField } from 'react-admin';

const AuthorShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <NumberField source="birthYear" options={{ useGrouping: false }} />
      <TextField source="bio" />
    </SimpleShowLayout>
  </Show>
);

export default AuthorShow;

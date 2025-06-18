import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const AuthorCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="birthYear" />
      <TextInput source="bio" multiline fullWidth />
    </SimpleForm>
  </Create>
);

export default AuthorCreate;

import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const AuthorEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="birthYear" />
      <TextInput source="bio" multiline fullWidth />
    </SimpleForm>
  </Edit>
);

export default AuthorEdit;

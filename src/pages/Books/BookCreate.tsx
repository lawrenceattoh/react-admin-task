import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';
import AuthorReferenceInput from '../../components/AuthorReferenceInput';

const BookCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <AuthorReferenceInput source="authorId" label="Author" />
      <NumberInput source="publishedYear" />
      <TextInput source="genre" />
      <TextInput source="description" multiline fullWidth />
    </SimpleForm>
  </Create>
);

export default BookCreate;

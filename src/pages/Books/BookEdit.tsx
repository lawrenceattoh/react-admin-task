import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import AuthorReferenceInput from '../../components/AuthorReferenceInput';

const BookEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <AuthorReferenceInput source="authorId" label="Author" />
      <NumberInput source="publishedYear" />
      <TextInput source="genre" />
      <TextInput source="description" multiline fullWidth />
    </SimpleForm>
  </Edit>
);

export default BookEdit;

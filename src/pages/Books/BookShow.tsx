import { Show, SimpleShowLayout, TextField, NumberField, ReferenceField } from 'react-admin';

const BookShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <ReferenceField source="authorId" reference="authors">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="genre" />
      <NumberField source="publishedYear" options={{ useGrouping: false }}/>
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);

export default BookShow;

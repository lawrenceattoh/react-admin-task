import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  TextInput,
  ReferenceInput,
  SelectInput,
  BulkDeleteButton,
} from 'react-admin';

const bookFilters = [
  <TextInput label="Search Title" source="title" alwaysOn />,
  <ReferenceInput label="Author" source="authorId" reference="authors">
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

const BookList = () => (
  <List filters={bookFilters} sort={{ field: 'title', order: 'ASC' }}>
    <Datagrid bulkActionButtons={<BulkDeleteButton />}>
      <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="authorId" reference="authors">
            <TextField source="name" />
        </ReferenceField>
        <TextField source="genre" />
        <NumberField source="publishedYear" options={{ useGrouping: false }} />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export default BookList;

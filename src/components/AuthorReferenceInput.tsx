import { ReferenceInput, SelectInput } from 'react-admin';
import type { ReferenceInputProps } from 'react-admin';

type AuthorReferenceInputProps = Omit<ReferenceInputProps, 'reference'> & {
  source: string;
};

const AuthorReferenceInput = (props: AuthorReferenceInputProps) => (
  <ReferenceInput reference="authors" {...props}>
    <SelectInput optionText="name" />
  </ReferenceInput>
);

export default AuthorReferenceInput;

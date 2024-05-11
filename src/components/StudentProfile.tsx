import {
  Text,
  Field,
  withDatasourceCheck,
  ImageFieldValue,
  NextImage,
  DateField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type StudentProfileProps = ComponentProps & {
  fields: {
    StudentId: Field<string>;
    StudentName: Field<string>;
    StudentProfilePic: Field<ImageFieldValue>;
    StudentDob: Field<string>;
    StudentAddress: Field<string>;
  };
};

const StudentProfile = (props: StudentProfileProps): JSX.Element => (
  <div>
    <Text tag="h1" field={props.fields.StudentName} />
    <Text tag="h5" field={props.fields.StudentId} />
    <NextImage field={props.fields.StudentProfilePic} height="100" width="60" />
    <DateField field={props.fields.StudentDob} render={(date) => date && date.toDateString()} />
    <RichText field={props.fields.StudentAddress} />
  </div>
);

export default withDatasourceCheck()<StudentProfileProps>(StudentProfile);

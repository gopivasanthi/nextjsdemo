import {
  Text,
  Field,
  withDatasourceCheck,
  ImageFieldValue,
  NextImage,
  Link,
  LinkFieldValue,
  DateField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type EventDetailsProps = ComponentProps & {
  fields: {
    EventName: Field<string>;
    EventDateandTime: Field<string>;
    EventDuration: Field<string>;
    StudentCoordinator: Field<LinkFieldValue>;
    EventBannerImage: Field<ImageFieldValue>;
  };
};

const EventDetails = (props: EventDetailsProps): JSX.Element => {
  const { StudentCoordinator } = props.fields;
  return (
    <div>
      <Text tag="h1" field={props.fields.EventName} />
      <DateField
        field={props.fields.EventDateandTime}
        render={(date) => date && date.toDateString()}
      />
      <Text tag="h5" field={props.fields.EventDuration} />
      <NextImage field={props.fields.EventBannerImage} height="200" width="400" />
      {StudentCoordinator && (
        <div>
          <Link field={props.fields.StudentCoordinator} />
        </div>
      )}
    </div>
  );
};

export default withDatasourceCheck()<EventDetailsProps>(EventDetails);

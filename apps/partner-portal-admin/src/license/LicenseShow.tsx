import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { MODULEMODEL_TITLE_FIELD } from "../moduleModel/ModuleModelTitle";

export const LicenseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ExpiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Module"
          source="modulemodel.id"
          reference="ModuleModel"
        >
          <TextField source={MODULEMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

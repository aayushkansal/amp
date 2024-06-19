import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { ModuleModelTitle } from "../moduleModel/ModuleModelTitle";

export const LicenseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <DateTimeInput label="ExpiryDate" source="expiryDate" />
        <ReferenceInput
          source="moduleField.id"
          reference="ModuleModel"
          label="Module"
        >
          <SelectInput optionText={ModuleModelTitle} />
        </ReferenceInput>
        <TextInput label="Type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};

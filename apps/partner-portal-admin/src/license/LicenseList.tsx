import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { MODULEMODEL_TITLE_FIELD } from "../moduleModel/ModuleModelTitle";

export const LicenseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Licenses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ModuleModelWhereUniqueInput } from "../moduleModel/ModuleModelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LicenseWhereInput = {
  company?: CompanyWhereUniqueInput;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  moduleField?: ModuleModelWhereUniqueInput;
  typeField?: StringNullableFilter;
};

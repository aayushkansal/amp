import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LicenseListRelationFilter } from "../license/LicenseListRelationFilter";

export type ModuleModelWhereInput = {
  company?: CompanyWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  licenses?: LicenseListRelationFilter;
  name?: StringNullableFilter;
};

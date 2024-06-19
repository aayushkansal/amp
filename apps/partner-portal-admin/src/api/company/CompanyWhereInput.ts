import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LicenseListRelationFilter } from "../license/LicenseListRelationFilter";
import { ModuleModelListRelationFilter } from "../moduleModel/ModuleModelListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompanyWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  licenses?: LicenseListRelationFilter;
  modules?: ModuleModelListRelationFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};

import { LicenseCreateNestedManyWithoutCompaniesInput } from "./LicenseCreateNestedManyWithoutCompaniesInput";
import { ModuleModelCreateNestedManyWithoutCompaniesInput } from "./ModuleModelCreateNestedManyWithoutCompaniesInput";
import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: string | null;
  licenses?: LicenseCreateNestedManyWithoutCompaniesInput;
  modules?: ModuleModelCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
  users?: UserCreateNestedManyWithoutCompaniesInput;
};

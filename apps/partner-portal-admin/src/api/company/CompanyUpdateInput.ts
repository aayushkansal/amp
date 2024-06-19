import { LicenseUpdateManyWithoutCompaniesInput } from "./LicenseUpdateManyWithoutCompaniesInput";
import { ModuleModelUpdateManyWithoutCompaniesInput } from "./ModuleModelUpdateManyWithoutCompaniesInput";
import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: string | null;
  licenses?: LicenseUpdateManyWithoutCompaniesInput;
  modules?: ModuleModelUpdateManyWithoutCompaniesInput;
  name?: string | null;
  users?: UserUpdateManyWithoutCompaniesInput;
};

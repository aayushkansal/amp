import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { LicenseCreateNestedManyWithoutModuleModelsInput } from "./LicenseCreateNestedManyWithoutModuleModelsInput";

export type ModuleModelCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  licenses?: LicenseCreateNestedManyWithoutModuleModelsInput;
  name?: string | null;
};

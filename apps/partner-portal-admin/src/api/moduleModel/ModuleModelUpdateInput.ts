import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { LicenseUpdateManyWithoutModuleModelsInput } from "./LicenseUpdateManyWithoutModuleModelsInput";

export type ModuleModelUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  licenses?: LicenseUpdateManyWithoutModuleModelsInput;
  name?: string | null;
};

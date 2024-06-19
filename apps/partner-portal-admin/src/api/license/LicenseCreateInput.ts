import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ModuleModelWhereUniqueInput } from "../moduleModel/ModuleModelWhereUniqueInput";

export type LicenseCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  expiryDate?: Date | null;
  moduleField?: ModuleModelWhereUniqueInput | null;
  typeField?: string | null;
};

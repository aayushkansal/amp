import { Company } from "../company/Company";
import { License } from "../license/License";

export type ModuleModel = {
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  id: string;
  licenses?: Array<License>;
  name: string | null;
  updatedAt: Date;
};

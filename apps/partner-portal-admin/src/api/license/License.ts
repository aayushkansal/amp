import { Company } from "../company/Company";
import { ModuleModel } from "../moduleModel/ModuleModel";

export type License = {
  company?: Company | null;
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  moduleField?: ModuleModel | null;
  typeField: string | null;
  updatedAt: Date;
};

import { License } from "../license/License";
import { ModuleModel } from "../moduleModel/ModuleModel";
import { User } from "../user/User";

export type Company = {
  address: string | null;
  createdAt: Date;
  id: string;
  licenses?: Array<License>;
  modules?: Array<ModuleModel>;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};

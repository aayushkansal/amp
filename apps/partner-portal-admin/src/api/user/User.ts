import { Company } from "../company/Company";
import { JsonValue } from "type-fest";

export type User = {
  company?: Company | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

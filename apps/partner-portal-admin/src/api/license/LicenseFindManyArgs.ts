import { LicenseWhereInput } from "./LicenseWhereInput";
import { LicenseOrderByInput } from "./LicenseOrderByInput";

export type LicenseFindManyArgs = {
  where?: LicenseWhereInput;
  orderBy?: Array<LicenseOrderByInput>;
  skip?: number;
  take?: number;
};

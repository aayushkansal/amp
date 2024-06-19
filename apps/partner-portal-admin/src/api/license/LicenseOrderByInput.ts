import { SortOrder } from "../../util/SortOrder";

export type LicenseOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  moduleFieldId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};

import { License as TLicense } from "../api/license/License";

export const LICENSE_TITLE_FIELD = "typeField";

export const LicenseTitle = (record: TLicense): string => {
  return record.typeField?.toString() || String(record.id);
};

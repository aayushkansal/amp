import { ModuleModel as TModuleModel } from "../api/moduleModel/ModuleModel";

export const MODULEMODEL_TITLE_FIELD = "name";

export const ModuleModelTitle = (record: TModuleModel): string => {
  return record.name?.toString() || String(record.id);
};

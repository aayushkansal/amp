import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LicenseService } from "./license.service";
import { LicenseControllerBase } from "./base/license.controller.base";

@swagger.ApiTags("licenses")
@common.Controller("licenses")
export class LicenseController extends LicenseControllerBase {
  constructor(protected readonly service: LicenseService) {
    super(service);
  }
}

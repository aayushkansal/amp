import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyService } from "./company.service";
import { CompanyControllerBase } from "./base/company.controller.base";

@swagger.ApiTags("companies")
@common.Controller("companies")
export class CompanyController extends CompanyControllerBase {
  constructor(protected readonly service: CompanyService) {
    super(service);
  }
}

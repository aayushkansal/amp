import * as graphql from "@nestjs/graphql";
import { LicenseResolverBase } from "./base/license.resolver.base";
import { License } from "./base/License";
import { LicenseService } from "./license.service";

@graphql.Resolver(() => License)
export class LicenseResolver extends LicenseResolverBase {
  constructor(protected readonly service: LicenseService) {
    super(service);
  }
}

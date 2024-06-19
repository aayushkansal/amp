import { Module } from "@nestjs/common";
import { LicenseModuleBase } from "./base/license.module.base";
import { LicenseService } from "./license.service";
import { LicenseController } from "./license.controller";
import { LicenseResolver } from "./license.resolver";

@Module({
  imports: [LicenseModuleBase],
  controllers: [LicenseController],
  providers: [LicenseService, LicenseResolver],
  exports: [LicenseService],
})
export class LicenseModule {}

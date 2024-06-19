import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LicenseServiceBase } from "./base/license.service.base";

@Injectable()
export class LicenseService extends LicenseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

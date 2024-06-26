/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LicenseService } from "../license.service";
import { LicenseCreateInput } from "./LicenseCreateInput";
import { License } from "./License";
import { LicenseFindManyArgs } from "./LicenseFindManyArgs";
import { LicenseWhereUniqueInput } from "./LicenseWhereUniqueInput";
import { LicenseUpdateInput } from "./LicenseUpdateInput";

export class LicenseControllerBase {
  constructor(protected readonly service: LicenseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: License })
  async createLicense(
    @common.Body() data: LicenseCreateInput
  ): Promise<License> {
    return await this.service.createLicense({
      data: {
        ...data,

        company: data.company
          ? {
              connect: data.company,
            }
          : undefined,

        moduleField: data.moduleField
          ? {
              connect: data.moduleField,
            }
          : undefined,
      },
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expiryDate: true,
        id: true,

        moduleField: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [License] })
  @ApiNestedQuery(LicenseFindManyArgs)
  async licenses(@common.Req() request: Request): Promise<License[]> {
    const args = plainToClass(LicenseFindManyArgs, request.query);
    return this.service.licenses({
      ...args,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expiryDate: true,
        id: true,

        moduleField: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: License })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async license(
    @common.Param() params: LicenseWhereUniqueInput
  ): Promise<License | null> {
    const result = await this.service.license({
      where: params,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expiryDate: true,
        id: true,

        moduleField: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: License })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLicense(
    @common.Param() params: LicenseWhereUniqueInput,
    @common.Body() data: LicenseUpdateInput
  ): Promise<License | null> {
    try {
      return await this.service.updateLicense({
        where: params,
        data: {
          ...data,

          company: data.company
            ? {
                connect: data.company,
              }
            : undefined,

          moduleField: data.moduleField
            ? {
                connect: data.moduleField,
              }
            : undefined,
        },
        select: {
          company: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          expiryDate: true,
          id: true,

          moduleField: {
            select: {
              id: true,
            },
          },

          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: License })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLicense(
    @common.Param() params: LicenseWhereUniqueInput
  ): Promise<License | null> {
    try {
      return await this.service.deleteLicense({
        where: params,
        select: {
          company: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          expiryDate: true,
          id: true,

          moduleField: {
            select: {
              id: true,
            },
          },

          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

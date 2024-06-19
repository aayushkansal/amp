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
import { CompanyService } from "../company.service";
import { CompanyCreateInput } from "./CompanyCreateInput";
import { Company } from "./Company";
import { CompanyFindManyArgs } from "./CompanyFindManyArgs";
import { CompanyWhereUniqueInput } from "./CompanyWhereUniqueInput";
import { CompanyUpdateInput } from "./CompanyUpdateInput";
import { LicenseFindManyArgs } from "../../license/base/LicenseFindManyArgs";
import { License } from "../../license/base/License";
import { LicenseWhereUniqueInput } from "../../license/base/LicenseWhereUniqueInput";
import { ModuleModelFindManyArgs } from "../../moduleModel/base/ModuleModelFindManyArgs";
import { ModuleModel } from "../../moduleModel/base/ModuleModel";
import { ModuleModelWhereUniqueInput } from "../../moduleModel/base/ModuleModelWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

export class CompanyControllerBase {
  constructor(protected readonly service: CompanyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Company })
  async createCompany(
    @common.Body() data: CompanyCreateInput
  ): Promise<Company> {
    return await this.service.createCompany({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Company] })
  @ApiNestedQuery(CompanyFindManyArgs)
  async companies(@common.Req() request: Request): Promise<Company[]> {
    const args = plainToClass(CompanyFindManyArgs, request.query);
    return this.service.companies({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async company(
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Company | null> {
    const result = await this.service.company({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCompany(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() data: CompanyUpdateInput
  ): Promise<Company | null> {
    try {
      return await this.service.updateCompany({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompany(
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Company | null> {
    try {
      return await this.service.deleteCompany({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
          name: true,
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

  @common.Get("/:id/licenses")
  @ApiNestedQuery(LicenseFindManyArgs)
  async findLicenses(
    @common.Req() request: Request,
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<License[]> {
    const query = plainToClass(LicenseFindManyArgs, request.query);
    const results = await this.service.findLicenses(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/licenses")
  async connectLicenses(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: LicenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      licenses: {
        connect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/licenses")
  async updateLicenses(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: LicenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      licenses: {
        set: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/licenses")
  async disconnectLicenses(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: LicenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      licenses: {
        disconnect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/modules")
  @ApiNestedQuery(ModuleModelFindManyArgs)
  async findModules(
    @common.Req() request: Request,
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<ModuleModel[]> {
    const query = plainToClass(ModuleModelFindManyArgs, request.query);
    const results = await this.service.findModules(params.id, {
      ...query,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/modules")
  async connectModules(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: ModuleModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modules: {
        connect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/modules")
  async updateModules(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: ModuleModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modules: {
        set: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/modules")
  async disconnectModules(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: ModuleModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      modules: {
        disconnect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  async connectUsers(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  async updateUsers(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  async disconnectUsers(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }
}

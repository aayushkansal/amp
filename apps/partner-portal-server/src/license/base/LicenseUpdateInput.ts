/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ModuleModelWhereUniqueInput } from "../../moduleModel/base/ModuleModelWhereUniqueInput";

@InputType()
class LicenseUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expiryDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ModuleModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModuleModelWhereUniqueInput)
  @IsOptional()
  @Field(() => ModuleModelWhereUniqueInput, {
    nullable: true,
  })
  moduleField?: ModuleModelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { LicenseUpdateInput as LicenseUpdateInput };

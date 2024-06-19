/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ModuleModelWhereUniqueInput } from "../../moduleModel/base/ModuleModelWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ModuleModelUpdateManyWithoutCompaniesInput {
  @Field(() => [ModuleModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModuleModelWhereUniqueInput],
  })
  connect?: Array<ModuleModelWhereUniqueInput>;

  @Field(() => [ModuleModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModuleModelWhereUniqueInput],
  })
  disconnect?: Array<ModuleModelWhereUniqueInput>;

  @Field(() => [ModuleModelWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModuleModelWhereUniqueInput],
  })
  set?: Array<ModuleModelWhereUniqueInput>;
}

export { ModuleModelUpdateManyWithoutCompaniesInput as ModuleModelUpdateManyWithoutCompaniesInput };

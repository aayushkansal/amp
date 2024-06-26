/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ModuleModelWhereUniqueInput } from "./ModuleModelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ModuleModelUpdateInput } from "./ModuleModelUpdateInput";

@ArgsType()
class UpdateModuleModelArgs {
  @ApiProperty({
    required: true,
    type: () => ModuleModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModuleModelWhereUniqueInput)
  @Field(() => ModuleModelWhereUniqueInput, { nullable: false })
  where!: ModuleModelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ModuleModelUpdateInput,
  })
  @ValidateNested()
  @Type(() => ModuleModelUpdateInput)
  @Field(() => ModuleModelUpdateInput, { nullable: false })
  data!: ModuleModelUpdateInput;
}

export { UpdateModuleModelArgs as UpdateModuleModelArgs };

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("NullableStringFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableStringFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  set?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  unset?: boolean | undefined;
}
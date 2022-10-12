import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutVersion_group_regionsInput } from './regions-create-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutVersion_group_regionsInput } from './regions-create-or-connect-without-version-group-regions.input';
import { regionsUpsertWithoutVersion_group_regionsInput } from './regions-upsert-without-version-group-regions.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { regionsUpdateWithoutVersion_group_regionsInput } from './regions-update-without-version-group-regions.input';

@InputType()
export class regionsUpdateOneRequiredWithoutVersion_group_regionsNestedInput {

    @Field(() => regionsCreateWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => regionsCreateWithoutVersion_group_regionsInput)
    create?: regionsCreateWithoutVersion_group_regionsInput;

    @Field(() => regionsCreateOrConnectWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutVersion_group_regionsInput)
    connectOrCreate?: regionsCreateOrConnectWithoutVersion_group_regionsInput;

    @Field(() => regionsUpsertWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => regionsUpsertWithoutVersion_group_regionsInput)
    upsert?: regionsUpsertWithoutVersion_group_regionsInput;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;

    @Field(() => regionsUpdateWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => regionsUpdateWithoutVersion_group_regionsInput)
    update?: regionsUpdateWithoutVersion_group_regionsInput;
}

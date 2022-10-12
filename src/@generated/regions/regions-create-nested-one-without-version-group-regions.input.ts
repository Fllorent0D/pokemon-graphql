import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutVersion_group_regionsInput } from './regions-create-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutVersion_group_regionsInput } from './regions-create-or-connect-without-version-group-regions.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class regionsCreateNestedOneWithoutVersion_group_regionsInput {

    @Field(() => regionsCreateWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => regionsCreateWithoutVersion_group_regionsInput)
    create?: regionsCreateWithoutVersion_group_regionsInput;

    @Field(() => regionsCreateOrConnectWithoutVersion_group_regionsInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutVersion_group_regionsInput)
    connectOrCreate?: regionsCreateOrConnectWithoutVersion_group_regionsInput;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;
}

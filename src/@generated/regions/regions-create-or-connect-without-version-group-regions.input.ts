import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutVersion_group_regionsInput } from './regions-create-without-version-group-regions.input';

@InputType()
export class regionsCreateOrConnectWithoutVersion_group_regionsInput {

    @Field(() => regionsWhereUniqueInput, {nullable:false})
    @Type(() => regionsWhereUniqueInput)
    where!: regionsWhereUniqueInput;

    @Field(() => regionsCreateWithoutVersion_group_regionsInput, {nullable:false})
    @Type(() => regionsCreateWithoutVersion_group_regionsInput)
    create!: regionsCreateWithoutVersion_group_regionsInput;
}

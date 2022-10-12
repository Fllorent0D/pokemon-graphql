import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsWhereInput } from '../version-group-regions/version-group-regions-where.input';

@InputType()
export class Version_group_regionsListRelationFilter {

    @Field(() => version_group_regionsWhereInput, {nullable:true})
    every?: version_group_regionsWhereInput;

    @Field(() => version_group_regionsWhereInput, {nullable:true})
    some?: version_group_regionsWhereInput;

    @Field(() => version_group_regionsWhereInput, {nullable:true})
    none?: version_group_regionsWhereInput;
}

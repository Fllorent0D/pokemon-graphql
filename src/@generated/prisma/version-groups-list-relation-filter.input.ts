import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereInput } from '../version-groups/version-groups-where.input';

@InputType()
export class Version_groupsListRelationFilter {

    @Field(() => version_groupsWhereInput, {nullable:true})
    every?: version_groupsWhereInput;

    @Field(() => version_groupsWhereInput, {nullable:true})
    some?: version_groupsWhereInput;

    @Field(() => version_groupsWhereInput, {nullable:true})
    none?: version_groupsWhereInput;
}

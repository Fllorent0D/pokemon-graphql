import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsWhereInput } from '../version-groups/version-groups-where.input';

@InputType()
export class Version_groupsRelationFilter {

    @Field(() => version_groupsWhereInput, {nullable:true})
    is?: version_groupsWhereInput;

    @Field(() => version_groupsWhereInput, {nullable:true})
    isNot?: version_groupsWhereInput;
}

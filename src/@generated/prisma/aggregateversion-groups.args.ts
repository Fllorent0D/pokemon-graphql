import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_groupsWhereInput } from '../version-groups/version-groups-where.input';
import { Type } from 'class-transformer';
import { version_groupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { version_groupsWhereUniqueInput } from '../version-groups/version-groups-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateversionGroupsArgs {

    @Field(() => version_groupsWhereInput, {nullable:true})
    @Type(() => version_groupsWhereInput)
    where?: version_groupsWhereInput;

    @Field(() => [version_groupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<version_groupsOrderByWithRelationInput>;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    cursor?: version_groupsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

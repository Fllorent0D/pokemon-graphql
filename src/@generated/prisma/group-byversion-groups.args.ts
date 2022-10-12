import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_groupsWhereInput } from '../version-groups/version-groups-where.input';
import { Type } from 'class-transformer';
import { version_groupsOrderByWithAggregationInput } from '../version-groups/version-groups-order-by-with-aggregation.input';
import { Version_groupsScalarFieldEnum } from './version-groups-scalar-field.enum';
import { version_groupsScalarWhereWithAggregatesInput } from '../version-groups/version-groups-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByversionGroupsArgs {

    @Field(() => version_groupsWhereInput, {nullable:true})
    @Type(() => version_groupsWhereInput)
    where?: version_groupsWhereInput;

    @Field(() => [version_groupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<version_groupsOrderByWithAggregationInput>;

    @Field(() => [Version_groupsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Version_groupsScalarFieldEnum>;

    @Field(() => version_groupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: version_groupsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

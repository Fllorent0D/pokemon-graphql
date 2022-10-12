import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_groupsWhereInput } from '../egg-groups/egg-groups-where.input';
import { Type } from 'class-transformer';
import { egg_groupsOrderByWithAggregationInput } from '../egg-groups/egg-groups-order-by-with-aggregation.input';
import { Egg_groupsScalarFieldEnum } from './egg-groups-scalar-field.enum';
import { egg_groupsScalarWhereWithAggregatesInput } from '../egg-groups/egg-groups-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByeggGroupsArgs {

    @Field(() => egg_groupsWhereInput, {nullable:true})
    @Type(() => egg_groupsWhereInput)
    where?: egg_groupsWhereInput;

    @Field(() => [egg_groupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<egg_groupsOrderByWithAggregationInput>;

    @Field(() => [Egg_groupsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Egg_groupsScalarFieldEnum>;

    @Field(() => egg_groupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: egg_groupsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

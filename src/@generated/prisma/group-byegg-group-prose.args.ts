import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_group_proseWhereInput } from '../egg-group-prose/egg-group-prose-where.input';
import { Type } from 'class-transformer';
import { egg_group_proseOrderByWithAggregationInput } from '../egg-group-prose/egg-group-prose-order-by-with-aggregation.input';
import { Egg_group_proseScalarFieldEnum } from './egg-group-prose-scalar-field.enum';
import { egg_group_proseScalarWhereWithAggregatesInput } from '../egg-group-prose/egg-group-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByeggGroupProseArgs {

    @Field(() => egg_group_proseWhereInput, {nullable:true})
    @Type(() => egg_group_proseWhereInput)
    where?: egg_group_proseWhereInput;

    @Field(() => [egg_group_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<egg_group_proseOrderByWithAggregationInput>;

    @Field(() => [Egg_group_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Egg_group_proseScalarFieldEnum>;

    @Field(() => egg_group_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: egg_group_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

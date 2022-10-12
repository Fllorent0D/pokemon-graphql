import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_summariesWhereInput } from '../move-flavor-summaries/move-flavor-summaries-where.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesOrderByWithAggregationInput } from '../move-flavor-summaries/move-flavor-summaries-order-by-with-aggregation.input';
import { Move_flavor_summariesScalarFieldEnum } from './move-flavor-summaries-scalar-field.enum';
import { move_flavor_summariesScalarWhereWithAggregatesInput } from '../move-flavor-summaries/move-flavor-summaries-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveFlavorSummariesArgs {

    @Field(() => move_flavor_summariesWhereInput, {nullable:true})
    @Type(() => move_flavor_summariesWhereInput)
    where?: move_flavor_summariesWhereInput;

    @Field(() => [move_flavor_summariesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_flavor_summariesOrderByWithAggregationInput>;

    @Field(() => [Move_flavor_summariesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_flavor_summariesScalarFieldEnum>;

    @Field(() => move_flavor_summariesScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_flavor_summariesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

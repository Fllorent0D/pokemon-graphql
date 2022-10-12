import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_summariesWhereInput } from '../item-flavor-summaries/item-flavor-summaries-where.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesOrderByWithAggregationInput } from '../item-flavor-summaries/item-flavor-summaries-order-by-with-aggregation.input';
import { Item_flavor_summariesScalarFieldEnum } from './item-flavor-summaries-scalar-field.enum';
import { item_flavor_summariesScalarWhereWithAggregatesInput } from '../item-flavor-summaries/item-flavor-summaries-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemFlavorSummariesArgs {

    @Field(() => item_flavor_summariesWhereInput, {nullable:true})
    @Type(() => item_flavor_summariesWhereInput)
    where?: item_flavor_summariesWhereInput;

    @Field(() => [item_flavor_summariesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_flavor_summariesOrderByWithAggregationInput>;

    @Field(() => [Item_flavor_summariesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_flavor_summariesScalarFieldEnum>;

    @Field(() => item_flavor_summariesScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_flavor_summariesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

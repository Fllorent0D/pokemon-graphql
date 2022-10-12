import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effect_proseWhereInput } from '../item-fling-effect-prose/item-fling-effect-prose-where.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseOrderByWithAggregationInput } from '../item-fling-effect-prose/item-fling-effect-prose-order-by-with-aggregation.input';
import { Item_fling_effect_proseScalarFieldEnum } from './item-fling-effect-prose-scalar-field.enum';
import { item_fling_effect_proseScalarWhereWithAggregatesInput } from '../item-fling-effect-prose/item-fling-effect-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemFlingEffectProseArgs {

    @Field(() => item_fling_effect_proseWhereInput, {nullable:true})
    @Type(() => item_fling_effect_proseWhereInput)
    where?: item_fling_effect_proseWhereInput;

    @Field(() => [item_fling_effect_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_fling_effect_proseOrderByWithAggregationInput>;

    @Field(() => [Item_fling_effect_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_fling_effect_proseScalarFieldEnum>;

    @Field(() => item_fling_effect_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_fling_effect_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

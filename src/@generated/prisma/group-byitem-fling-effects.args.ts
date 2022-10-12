import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effectsWhereInput } from '../item-fling-effects/item-fling-effects-where.input';
import { Type } from 'class-transformer';
import { item_fling_effectsOrderByWithAggregationInput } from '../item-fling-effects/item-fling-effects-order-by-with-aggregation.input';
import { Item_fling_effectsScalarFieldEnum } from './item-fling-effects-scalar-field.enum';
import { item_fling_effectsScalarWhereWithAggregatesInput } from '../item-fling-effects/item-fling-effects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemFlingEffectsArgs {

    @Field(() => item_fling_effectsWhereInput, {nullable:true})
    @Type(() => item_fling_effectsWhereInput)
    where?: item_fling_effectsWhereInput;

    @Field(() => [item_fling_effectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_fling_effectsOrderByWithAggregationInput>;

    @Field(() => [Item_fling_effectsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_fling_effectsScalarFieldEnum>;

    @Field(() => item_fling_effectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_fling_effectsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

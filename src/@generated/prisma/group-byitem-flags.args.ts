import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flagsWhereInput } from '../item-flags/item-flags-where.input';
import { Type } from 'class-transformer';
import { item_flagsOrderByWithAggregationInput } from '../item-flags/item-flags-order-by-with-aggregation.input';
import { Item_flagsScalarFieldEnum } from './item-flags-scalar-field.enum';
import { item_flagsScalarWhereWithAggregatesInput } from '../item-flags/item-flags-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemFlagsArgs {

    @Field(() => item_flagsWhereInput, {nullable:true})
    @Type(() => item_flagsWhereInput)
    where?: item_flagsWhereInput;

    @Field(() => [item_flagsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_flagsOrderByWithAggregationInput>;

    @Field(() => [Item_flagsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_flagsScalarFieldEnum>;

    @Field(() => item_flagsScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_flagsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

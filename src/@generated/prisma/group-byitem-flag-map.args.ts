import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_mapWhereInput } from '../item-flag-map/item-flag-map-where.input';
import { Type } from 'class-transformer';
import { item_flag_mapOrderByWithAggregationInput } from '../item-flag-map/item-flag-map-order-by-with-aggregation.input';
import { Item_flag_mapScalarFieldEnum } from './item-flag-map-scalar-field.enum';
import { item_flag_mapScalarWhereWithAggregatesInput } from '../item-flag-map/item-flag-map-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemFlagMapArgs {

    @Field(() => item_flag_mapWhereInput, {nullable:true})
    @Type(() => item_flag_mapWhereInput)
    where?: item_flag_mapWhereInput;

    @Field(() => [item_flag_mapOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_flag_mapOrderByWithAggregationInput>;

    @Field(() => [Item_flag_mapScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_flag_mapScalarFieldEnum>;

    @Field(() => item_flag_mapScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_flag_mapScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

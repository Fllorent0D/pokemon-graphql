import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_textWhereInput } from '../item-flavor-text/item-flavor-text-where.input';
import { Type } from 'class-transformer';
import { item_flavor_textOrderByWithAggregationInput } from '../item-flavor-text/item-flavor-text-order-by-with-aggregation.input';
import { Item_flavor_textScalarFieldEnum } from './item-flavor-text-scalar-field.enum';
import { item_flavor_textScalarWhereWithAggregatesInput } from '../item-flavor-text/item-flavor-text-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemFlavorTextArgs {

    @Field(() => item_flavor_textWhereInput, {nullable:true})
    @Type(() => item_flavor_textWhereInput)
    where?: item_flavor_textWhereInput;

    @Field(() => [item_flavor_textOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_flavor_textOrderByWithAggregationInput>;

    @Field(() => [Item_flavor_textScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_flavor_textScalarFieldEnum>;

    @Field(() => item_flavor_textScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_flavor_textScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocket_namesWhereInput } from '../item-pocket-names/item-pocket-names-where.input';
import { Type } from 'class-transformer';
import { item_pocket_namesOrderByWithAggregationInput } from '../item-pocket-names/item-pocket-names-order-by-with-aggregation.input';
import { Item_pocket_namesScalarFieldEnum } from './item-pocket-names-scalar-field.enum';
import { item_pocket_namesScalarWhereWithAggregatesInput } from '../item-pocket-names/item-pocket-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemPocketNamesArgs {

    @Field(() => item_pocket_namesWhereInput, {nullable:true})
    @Type(() => item_pocket_namesWhereInput)
    where?: item_pocket_namesWhereInput;

    @Field(() => [item_pocket_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_pocket_namesOrderByWithAggregationInput>;

    @Field(() => [Item_pocket_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_pocket_namesScalarFieldEnum>;

    @Field(() => item_pocket_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_pocket_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

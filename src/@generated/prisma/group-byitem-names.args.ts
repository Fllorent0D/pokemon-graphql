import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_namesWhereInput } from '../item-names/item-names-where.input';
import { Type } from 'class-transformer';
import { item_namesOrderByWithAggregationInput } from '../item-names/item-names-order-by-with-aggregation.input';
import { Item_namesScalarFieldEnum } from './item-names-scalar-field.enum';
import { item_namesScalarWhereWithAggregatesInput } from '../item-names/item-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemNamesArgs {

    @Field(() => item_namesWhereInput, {nullable:true})
    @Type(() => item_namesWhereInput)
    where?: item_namesWhereInput;

    @Field(() => [item_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_namesOrderByWithAggregationInput>;

    @Field(() => [Item_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_namesScalarFieldEnum>;

    @Field(() => item_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

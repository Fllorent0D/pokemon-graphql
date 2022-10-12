import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_categoriesWhereInput } from '../item-categories/item-categories-where.input';
import { Type } from 'class-transformer';
import { item_categoriesOrderByWithAggregationInput } from '../item-categories/item-categories-order-by-with-aggregation.input';
import { Item_categoriesScalarFieldEnum } from './item-categories-scalar-field.enum';
import { item_categoriesScalarWhereWithAggregatesInput } from '../item-categories/item-categories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemCategoriesArgs {

    @Field(() => item_categoriesWhereInput, {nullable:true})
    @Type(() => item_categoriesWhereInput)
    where?: item_categoriesWhereInput;

    @Field(() => [item_categoriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_categoriesOrderByWithAggregationInput>;

    @Field(() => [Item_categoriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_categoriesScalarFieldEnum>;

    @Field(() => item_categoriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_categoriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

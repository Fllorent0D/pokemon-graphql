import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_category_proseWhereInput } from '../item-category-prose/item-category-prose-where.input';
import { Type } from 'class-transformer';
import { item_category_proseOrderByWithAggregationInput } from '../item-category-prose/item-category-prose-order-by-with-aggregation.input';
import { Item_category_proseScalarFieldEnum } from './item-category-prose-scalar-field.enum';
import { item_category_proseScalarWhereWithAggregatesInput } from '../item-category-prose/item-category-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByitemCategoryProseArgs {

    @Field(() => item_category_proseWhereInput, {nullable:true})
    @Type(() => item_category_proseWhereInput)
    where?: item_category_proseWhereInput;

    @Field(() => [item_category_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<item_category_proseOrderByWithAggregationInput>;

    @Field(() => [Item_category_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Item_category_proseScalarFieldEnum>;

    @Field(() => item_category_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: item_category_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_category_proseCountOrderByAggregateInput } from './item-category-prose-count-order-by-aggregate.input';
import { item_category_proseAvgOrderByAggregateInput } from './item-category-prose-avg-order-by-aggregate.input';
import { item_category_proseMaxOrderByAggregateInput } from './item-category-prose-max-order-by-aggregate.input';
import { item_category_proseMinOrderByAggregateInput } from './item-category-prose-min-order-by-aggregate.input';
import { item_category_proseSumOrderByAggregateInput } from './item-category-prose-sum-order-by-aggregate.input';

@InputType()
export class item_category_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => item_category_proseCountOrderByAggregateInput, {nullable:true})
    _count?: item_category_proseCountOrderByAggregateInput;

    @Field(() => item_category_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_category_proseAvgOrderByAggregateInput;

    @Field(() => item_category_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: item_category_proseMaxOrderByAggregateInput;

    @Field(() => item_category_proseMinOrderByAggregateInput, {nullable:true})
    _min?: item_category_proseMinOrderByAggregateInput;

    @Field(() => item_category_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: item_category_proseSumOrderByAggregateInput;
}

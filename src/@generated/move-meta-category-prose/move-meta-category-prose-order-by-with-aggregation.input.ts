import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_meta_category_proseCountOrderByAggregateInput } from './move-meta-category-prose-count-order-by-aggregate.input';
import { move_meta_category_proseAvgOrderByAggregateInput } from './move-meta-category-prose-avg-order-by-aggregate.input';
import { move_meta_category_proseMaxOrderByAggregateInput } from './move-meta-category-prose-max-order-by-aggregate.input';
import { move_meta_category_proseMinOrderByAggregateInput } from './move-meta-category-prose-min-order-by-aggregate.input';
import { move_meta_category_proseSumOrderByAggregateInput } from './move-meta-category-prose-sum-order-by-aggregate.input';

@InputType()
export class move_meta_category_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_meta_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => move_meta_category_proseCountOrderByAggregateInput, {nullable:true})
    _count?: move_meta_category_proseCountOrderByAggregateInput;

    @Field(() => move_meta_category_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_meta_category_proseAvgOrderByAggregateInput;

    @Field(() => move_meta_category_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: move_meta_category_proseMaxOrderByAggregateInput;

    @Field(() => move_meta_category_proseMinOrderByAggregateInput, {nullable:true})
    _min?: move_meta_category_proseMinOrderByAggregateInput;

    @Field(() => move_meta_category_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: move_meta_category_proseSumOrderByAggregateInput;
}

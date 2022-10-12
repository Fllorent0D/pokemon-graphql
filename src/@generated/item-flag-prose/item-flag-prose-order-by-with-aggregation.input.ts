import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_flag_proseCountOrderByAggregateInput } from './item-flag-prose-count-order-by-aggregate.input';
import { item_flag_proseAvgOrderByAggregateInput } from './item-flag-prose-avg-order-by-aggregate.input';
import { item_flag_proseMaxOrderByAggregateInput } from './item-flag-prose-max-order-by-aggregate.input';
import { item_flag_proseMinOrderByAggregateInput } from './item-flag-prose-min-order-by-aggregate.input';
import { item_flag_proseSumOrderByAggregateInput } from './item-flag-prose-sum-order-by-aggregate.input';

@InputType()
export class item_flag_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_flag_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => item_flag_proseCountOrderByAggregateInput, {nullable:true})
    _count?: item_flag_proseCountOrderByAggregateInput;

    @Field(() => item_flag_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_flag_proseAvgOrderByAggregateInput;

    @Field(() => item_flag_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: item_flag_proseMaxOrderByAggregateInput;

    @Field(() => item_flag_proseMinOrderByAggregateInput, {nullable:true})
    _min?: item_flag_proseMinOrderByAggregateInput;

    @Field(() => item_flag_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: item_flag_proseSumOrderByAggregateInput;
}

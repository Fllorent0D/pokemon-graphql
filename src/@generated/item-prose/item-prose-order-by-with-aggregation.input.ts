import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_proseCountOrderByAggregateInput } from './item-prose-count-order-by-aggregate.input';
import { item_proseAvgOrderByAggregateInput } from './item-prose-avg-order-by-aggregate.input';
import { item_proseMaxOrderByAggregateInput } from './item-prose-max-order-by-aggregate.input';
import { item_proseMinOrderByAggregateInput } from './item-prose-min-order-by-aggregate.input';
import { item_proseSumOrderByAggregateInput } from './item-prose-sum-order-by-aggregate.input';

@InputType()
export class item_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    short_effect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => item_proseCountOrderByAggregateInput, {nullable:true})
    _count?: item_proseCountOrderByAggregateInput;

    @Field(() => item_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_proseAvgOrderByAggregateInput;

    @Field(() => item_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: item_proseMaxOrderByAggregateInput;

    @Field(() => item_proseMinOrderByAggregateInput, {nullable:true})
    _min?: item_proseMinOrderByAggregateInput;

    @Field(() => item_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: item_proseSumOrderByAggregateInput;
}

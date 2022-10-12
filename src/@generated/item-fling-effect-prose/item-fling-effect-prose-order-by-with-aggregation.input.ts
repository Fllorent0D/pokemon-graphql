import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_fling_effect_proseCountOrderByAggregateInput } from './item-fling-effect-prose-count-order-by-aggregate.input';
import { item_fling_effect_proseAvgOrderByAggregateInput } from './item-fling-effect-prose-avg-order-by-aggregate.input';
import { item_fling_effect_proseMaxOrderByAggregateInput } from './item-fling-effect-prose-max-order-by-aggregate.input';
import { item_fling_effect_proseMinOrderByAggregateInput } from './item-fling-effect-prose-min-order-by-aggregate.input';
import { item_fling_effect_proseSumOrderByAggregateInput } from './item-fling-effect-prose-sum-order-by-aggregate.input';

@InputType()
export class item_fling_effect_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_fling_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => item_fling_effect_proseCountOrderByAggregateInput, {nullable:true})
    _count?: item_fling_effect_proseCountOrderByAggregateInput;

    @Field(() => item_fling_effect_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_fling_effect_proseAvgOrderByAggregateInput;

    @Field(() => item_fling_effect_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: item_fling_effect_proseMaxOrderByAggregateInput;

    @Field(() => item_fling_effect_proseMinOrderByAggregateInput, {nullable:true})
    _min?: item_fling_effect_proseMinOrderByAggregateInput;

    @Field(() => item_fling_effect_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: item_fling_effect_proseSumOrderByAggregateInput;
}

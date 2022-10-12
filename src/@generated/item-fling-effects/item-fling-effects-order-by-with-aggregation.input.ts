import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_fling_effectsCountOrderByAggregateInput } from './item-fling-effects-count-order-by-aggregate.input';
import { item_fling_effectsAvgOrderByAggregateInput } from './item-fling-effects-avg-order-by-aggregate.input';
import { item_fling_effectsMaxOrderByAggregateInput } from './item-fling-effects-max-order-by-aggregate.input';
import { item_fling_effectsMinOrderByAggregateInput } from './item-fling-effects-min-order-by-aggregate.input';
import { item_fling_effectsSumOrderByAggregateInput } from './item-fling-effects-sum-order-by-aggregate.input';

@InputType()
export class item_fling_effectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => item_fling_effectsCountOrderByAggregateInput, {nullable:true})
    _count?: item_fling_effectsCountOrderByAggregateInput;

    @Field(() => item_fling_effectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_fling_effectsAvgOrderByAggregateInput;

    @Field(() => item_fling_effectsMaxOrderByAggregateInput, {nullable:true})
    _max?: item_fling_effectsMaxOrderByAggregateInput;

    @Field(() => item_fling_effectsMinOrderByAggregateInput, {nullable:true})
    _min?: item_fling_effectsMinOrderByAggregateInput;

    @Field(() => item_fling_effectsSumOrderByAggregateInput, {nullable:true})
    _sum?: item_fling_effectsSumOrderByAggregateInput;
}

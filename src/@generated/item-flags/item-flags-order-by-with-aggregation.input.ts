import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_flagsCountOrderByAggregateInput } from './item-flags-count-order-by-aggregate.input';
import { item_flagsAvgOrderByAggregateInput } from './item-flags-avg-order-by-aggregate.input';
import { item_flagsMaxOrderByAggregateInput } from './item-flags-max-order-by-aggregate.input';
import { item_flagsMinOrderByAggregateInput } from './item-flags-min-order-by-aggregate.input';
import { item_flagsSumOrderByAggregateInput } from './item-flags-sum-order-by-aggregate.input';

@InputType()
export class item_flagsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => item_flagsCountOrderByAggregateInput, {nullable:true})
    _count?: item_flagsCountOrderByAggregateInput;

    @Field(() => item_flagsAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_flagsAvgOrderByAggregateInput;

    @Field(() => item_flagsMaxOrderByAggregateInput, {nullable:true})
    _max?: item_flagsMaxOrderByAggregateInput;

    @Field(() => item_flagsMinOrderByAggregateInput, {nullable:true})
    _min?: item_flagsMinOrderByAggregateInput;

    @Field(() => item_flagsSumOrderByAggregateInput, {nullable:true})
    _sum?: item_flagsSumOrderByAggregateInput;
}

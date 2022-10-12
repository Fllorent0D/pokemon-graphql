import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { itemsCountOrderByAggregateInput } from './items-count-order-by-aggregate.input';
import { itemsAvgOrderByAggregateInput } from './items-avg-order-by-aggregate.input';
import { itemsMaxOrderByAggregateInput } from './items-max-order-by-aggregate.input';
import { itemsMinOrderByAggregateInput } from './items-min-order-by-aggregate.input';
import { itemsSumOrderByAggregateInput } from './items-sum-order-by-aggregate.input';

@InputType()
export class itemsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fling_power?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fling_effect_id?: keyof typeof SortOrder;

    @Field(() => itemsCountOrderByAggregateInput, {nullable:true})
    _count?: itemsCountOrderByAggregateInput;

    @Field(() => itemsAvgOrderByAggregateInput, {nullable:true})
    _avg?: itemsAvgOrderByAggregateInput;

    @Field(() => itemsMaxOrderByAggregateInput, {nullable:true})
    _max?: itemsMaxOrderByAggregateInput;

    @Field(() => itemsMinOrderByAggregateInput, {nullable:true})
    _min?: itemsMinOrderByAggregateInput;

    @Field(() => itemsSumOrderByAggregateInput, {nullable:true})
    _sum?: itemsSumOrderByAggregateInput;
}

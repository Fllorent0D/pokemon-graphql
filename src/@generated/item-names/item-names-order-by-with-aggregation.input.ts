import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_namesCountOrderByAggregateInput } from './item-names-count-order-by-aggregate.input';
import { item_namesAvgOrderByAggregateInput } from './item-names-avg-order-by-aggregate.input';
import { item_namesMaxOrderByAggregateInput } from './item-names-max-order-by-aggregate.input';
import { item_namesMinOrderByAggregateInput } from './item-names-min-order-by-aggregate.input';
import { item_namesSumOrderByAggregateInput } from './item-names-sum-order-by-aggregate.input';

@InputType()
export class item_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => item_namesCountOrderByAggregateInput, {nullable:true})
    _count?: item_namesCountOrderByAggregateInput;

    @Field(() => item_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_namesAvgOrderByAggregateInput;

    @Field(() => item_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: item_namesMaxOrderByAggregateInput;

    @Field(() => item_namesMinOrderByAggregateInput, {nullable:true})
    _min?: item_namesMinOrderByAggregateInput;

    @Field(() => item_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: item_namesSumOrderByAggregateInput;
}

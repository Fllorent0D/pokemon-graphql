import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_flavor_summariesCountOrderByAggregateInput } from './item-flavor-summaries-count-order-by-aggregate.input';
import { item_flavor_summariesAvgOrderByAggregateInput } from './item-flavor-summaries-avg-order-by-aggregate.input';
import { item_flavor_summariesMaxOrderByAggregateInput } from './item-flavor-summaries-max-order-by-aggregate.input';
import { item_flavor_summariesMinOrderByAggregateInput } from './item-flavor-summaries-min-order-by-aggregate.input';
import { item_flavor_summariesSumOrderByAggregateInput } from './item-flavor-summaries-sum-order-by-aggregate.input';

@InputType()
export class item_flavor_summariesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_summary?: keyof typeof SortOrder;

    @Field(() => item_flavor_summariesCountOrderByAggregateInput, {nullable:true})
    _count?: item_flavor_summariesCountOrderByAggregateInput;

    @Field(() => item_flavor_summariesAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_flavor_summariesAvgOrderByAggregateInput;

    @Field(() => item_flavor_summariesMaxOrderByAggregateInput, {nullable:true})
    _max?: item_flavor_summariesMaxOrderByAggregateInput;

    @Field(() => item_flavor_summariesMinOrderByAggregateInput, {nullable:true})
    _min?: item_flavor_summariesMinOrderByAggregateInput;

    @Field(() => item_flavor_summariesSumOrderByAggregateInput, {nullable:true})
    _sum?: item_flavor_summariesSumOrderByAggregateInput;
}

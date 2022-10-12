import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_flavor_summariesCountOrderByAggregateInput } from './move-flavor-summaries-count-order-by-aggregate.input';
import { move_flavor_summariesAvgOrderByAggregateInput } from './move-flavor-summaries-avg-order-by-aggregate.input';
import { move_flavor_summariesMaxOrderByAggregateInput } from './move-flavor-summaries-max-order-by-aggregate.input';
import { move_flavor_summariesMinOrderByAggregateInput } from './move-flavor-summaries-min-order-by-aggregate.input';
import { move_flavor_summariesSumOrderByAggregateInput } from './move-flavor-summaries-sum-order-by-aggregate.input';

@InputType()
export class move_flavor_summariesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_summary?: keyof typeof SortOrder;

    @Field(() => move_flavor_summariesCountOrderByAggregateInput, {nullable:true})
    _count?: move_flavor_summariesCountOrderByAggregateInput;

    @Field(() => move_flavor_summariesAvgOrderByAggregateInput, {nullable:true})
    _avg?: move_flavor_summariesAvgOrderByAggregateInput;

    @Field(() => move_flavor_summariesMaxOrderByAggregateInput, {nullable:true})
    _max?: move_flavor_summariesMaxOrderByAggregateInput;

    @Field(() => move_flavor_summariesMinOrderByAggregateInput, {nullable:true})
    _min?: move_flavor_summariesMinOrderByAggregateInput;

    @Field(() => move_flavor_summariesSumOrderByAggregateInput, {nullable:true})
    _sum?: move_flavor_summariesSumOrderByAggregateInput;
}

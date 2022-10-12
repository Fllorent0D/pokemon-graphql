import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { stat_hint_namesCountOrderByAggregateInput } from './stat-hint-names-count-order-by-aggregate.input';
import { stat_hint_namesAvgOrderByAggregateInput } from './stat-hint-names-avg-order-by-aggregate.input';
import { stat_hint_namesMaxOrderByAggregateInput } from './stat-hint-names-max-order-by-aggregate.input';
import { stat_hint_namesMinOrderByAggregateInput } from './stat-hint-names-min-order-by-aggregate.input';
import { stat_hint_namesSumOrderByAggregateInput } from './stat-hint-names-sum-order-by-aggregate.input';

@InputType()
export class stat_hint_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    stat_hint_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => stat_hint_namesCountOrderByAggregateInput, {nullable:true})
    _count?: stat_hint_namesCountOrderByAggregateInput;

    @Field(() => stat_hint_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: stat_hint_namesAvgOrderByAggregateInput;

    @Field(() => stat_hint_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: stat_hint_namesMaxOrderByAggregateInput;

    @Field(() => stat_hint_namesMinOrderByAggregateInput, {nullable:true})
    _min?: stat_hint_namesMinOrderByAggregateInput;

    @Field(() => stat_hint_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: stat_hint_namesSumOrderByAggregateInput;
}

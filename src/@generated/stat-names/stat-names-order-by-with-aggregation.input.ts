import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { stat_namesCountOrderByAggregateInput } from './stat-names-count-order-by-aggregate.input';
import { stat_namesAvgOrderByAggregateInput } from './stat-names-avg-order-by-aggregate.input';
import { stat_namesMaxOrderByAggregateInput } from './stat-names-max-order-by-aggregate.input';
import { stat_namesMinOrderByAggregateInput } from './stat-names-min-order-by-aggregate.input';
import { stat_namesSumOrderByAggregateInput } from './stat-names-sum-order-by-aggregate.input';

@InputType()
export class stat_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => stat_namesCountOrderByAggregateInput, {nullable:true})
    _count?: stat_namesCountOrderByAggregateInput;

    @Field(() => stat_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: stat_namesAvgOrderByAggregateInput;

    @Field(() => stat_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: stat_namesMaxOrderByAggregateInput;

    @Field(() => stat_namesMinOrderByAggregateInput, {nullable:true})
    _min?: stat_namesMinOrderByAggregateInput;

    @Field(() => stat_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: stat_namesSumOrderByAggregateInput;
}

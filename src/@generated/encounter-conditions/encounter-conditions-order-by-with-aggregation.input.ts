import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_conditionsCountOrderByAggregateInput } from './encounter-conditions-count-order-by-aggregate.input';
import { encounter_conditionsAvgOrderByAggregateInput } from './encounter-conditions-avg-order-by-aggregate.input';
import { encounter_conditionsMaxOrderByAggregateInput } from './encounter-conditions-max-order-by-aggregate.input';
import { encounter_conditionsMinOrderByAggregateInput } from './encounter-conditions-min-order-by-aggregate.input';
import { encounter_conditionsSumOrderByAggregateInput } from './encounter-conditions-sum-order-by-aggregate.input';

@InputType()
export class encounter_conditionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => encounter_conditionsCountOrderByAggregateInput, {nullable:true})
    _count?: encounter_conditionsCountOrderByAggregateInput;

    @Field(() => encounter_conditionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: encounter_conditionsAvgOrderByAggregateInput;

    @Field(() => encounter_conditionsMaxOrderByAggregateInput, {nullable:true})
    _max?: encounter_conditionsMaxOrderByAggregateInput;

    @Field(() => encounter_conditionsMinOrderByAggregateInput, {nullable:true})
    _min?: encounter_conditionsMinOrderByAggregateInput;

    @Field(() => encounter_conditionsSumOrderByAggregateInput, {nullable:true})
    _sum?: encounter_conditionsSumOrderByAggregateInput;
}

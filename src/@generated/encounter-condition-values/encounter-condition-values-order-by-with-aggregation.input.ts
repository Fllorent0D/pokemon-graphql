import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_condition_valuesCountOrderByAggregateInput } from './encounter-condition-values-count-order-by-aggregate.input';
import { encounter_condition_valuesAvgOrderByAggregateInput } from './encounter-condition-values-avg-order-by-aggregate.input';
import { encounter_condition_valuesMaxOrderByAggregateInput } from './encounter-condition-values-max-order-by-aggregate.input';
import { encounter_condition_valuesMinOrderByAggregateInput } from './encounter-condition-values-min-order-by-aggregate.input';
import { encounter_condition_valuesSumOrderByAggregateInput } from './encounter-condition-values-sum-order-by-aggregate.input';

@InputType()
export class encounter_condition_valuesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_default?: keyof typeof SortOrder;

    @Field(() => encounter_condition_valuesCountOrderByAggregateInput, {nullable:true})
    _count?: encounter_condition_valuesCountOrderByAggregateInput;

    @Field(() => encounter_condition_valuesAvgOrderByAggregateInput, {nullable:true})
    _avg?: encounter_condition_valuesAvgOrderByAggregateInput;

    @Field(() => encounter_condition_valuesMaxOrderByAggregateInput, {nullable:true})
    _max?: encounter_condition_valuesMaxOrderByAggregateInput;

    @Field(() => encounter_condition_valuesMinOrderByAggregateInput, {nullable:true})
    _min?: encounter_condition_valuesMinOrderByAggregateInput;

    @Field(() => encounter_condition_valuesSumOrderByAggregateInput, {nullable:true})
    _sum?: encounter_condition_valuesSumOrderByAggregateInput;
}

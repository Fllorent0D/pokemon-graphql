import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_condition_value_proseCountOrderByAggregateInput } from './encounter-condition-value-prose-count-order-by-aggregate.input';
import { encounter_condition_value_proseAvgOrderByAggregateInput } from './encounter-condition-value-prose-avg-order-by-aggregate.input';
import { encounter_condition_value_proseMaxOrderByAggregateInput } from './encounter-condition-value-prose-max-order-by-aggregate.input';
import { encounter_condition_value_proseMinOrderByAggregateInput } from './encounter-condition-value-prose-min-order-by-aggregate.input';
import { encounter_condition_value_proseSumOrderByAggregateInput } from './encounter-condition-value-prose-sum-order-by-aggregate.input';

@InputType()
export class encounter_condition_value_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_value_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => encounter_condition_value_proseCountOrderByAggregateInput, {nullable:true})
    _count?: encounter_condition_value_proseCountOrderByAggregateInput;

    @Field(() => encounter_condition_value_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: encounter_condition_value_proseAvgOrderByAggregateInput;

    @Field(() => encounter_condition_value_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: encounter_condition_value_proseMaxOrderByAggregateInput;

    @Field(() => encounter_condition_value_proseMinOrderByAggregateInput, {nullable:true})
    _min?: encounter_condition_value_proseMinOrderByAggregateInput;

    @Field(() => encounter_condition_value_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: encounter_condition_value_proseSumOrderByAggregateInput;
}

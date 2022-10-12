import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_condition_proseCountOrderByAggregateInput } from './encounter-condition-prose-count-order-by-aggregate.input';
import { encounter_condition_proseAvgOrderByAggregateInput } from './encounter-condition-prose-avg-order-by-aggregate.input';
import { encounter_condition_proseMaxOrderByAggregateInput } from './encounter-condition-prose-max-order-by-aggregate.input';
import { encounter_condition_proseMinOrderByAggregateInput } from './encounter-condition-prose-min-order-by-aggregate.input';
import { encounter_condition_proseSumOrderByAggregateInput } from './encounter-condition-prose-sum-order-by-aggregate.input';

@InputType()
export class encounter_condition_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => encounter_condition_proseCountOrderByAggregateInput, {nullable:true})
    _count?: encounter_condition_proseCountOrderByAggregateInput;

    @Field(() => encounter_condition_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: encounter_condition_proseAvgOrderByAggregateInput;

    @Field(() => encounter_condition_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: encounter_condition_proseMaxOrderByAggregateInput;

    @Field(() => encounter_condition_proseMinOrderByAggregateInput, {nullable:true})
    _min?: encounter_condition_proseMinOrderByAggregateInput;

    @Field(() => encounter_condition_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: encounter_condition_proseSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_condition_value_mapCountOrderByAggregateInput } from './encounter-condition-value-map-count-order-by-aggregate.input';
import { encounter_condition_value_mapAvgOrderByAggregateInput } from './encounter-condition-value-map-avg-order-by-aggregate.input';
import { encounter_condition_value_mapMaxOrderByAggregateInput } from './encounter-condition-value-map-max-order-by-aggregate.input';
import { encounter_condition_value_mapMinOrderByAggregateInput } from './encounter-condition-value-map-min-order-by-aggregate.input';
import { encounter_condition_value_mapSumOrderByAggregateInput } from './encounter-condition-value-map-sum-order-by-aggregate.input';

@InputType()
export class encounter_condition_value_mapOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_value_id?: keyof typeof SortOrder;

    @Field(() => encounter_condition_value_mapCountOrderByAggregateInput, {nullable:true})
    _count?: encounter_condition_value_mapCountOrderByAggregateInput;

    @Field(() => encounter_condition_value_mapAvgOrderByAggregateInput, {nullable:true})
    _avg?: encounter_condition_value_mapAvgOrderByAggregateInput;

    @Field(() => encounter_condition_value_mapMaxOrderByAggregateInput, {nullable:true})
    _max?: encounter_condition_value_mapMaxOrderByAggregateInput;

    @Field(() => encounter_condition_value_mapMinOrderByAggregateInput, {nullable:true})
    _min?: encounter_condition_value_mapMinOrderByAggregateInput;

    @Field(() => encounter_condition_value_mapSumOrderByAggregateInput, {nullable:true})
    _sum?: encounter_condition_value_mapSumOrderByAggregateInput;
}

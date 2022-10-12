import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_conditionsOrderByWithRelationInput } from '../encounter-conditions/encounter-conditions-order-by-with-relation.input';
import { encounter_condition_value_mapOrderByRelationAggregateInput } from '../encounter-condition-value-map/encounter-condition-value-map-order-by-relation-aggregate.input';
import { encounter_condition_value_proseOrderByRelationAggregateInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-order-by-relation-aggregate.input';

@InputType()
export class encounter_condition_valuesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_default?: keyof typeof SortOrder;

    @Field(() => encounter_conditionsOrderByWithRelationInput, {nullable:true})
    encounter_conditions?: encounter_conditionsOrderByWithRelationInput;

    @Field(() => encounter_condition_value_mapOrderByRelationAggregateInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapOrderByRelationAggregateInput;

    @Field(() => encounter_condition_value_proseOrderByRelationAggregateInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseOrderByRelationAggregateInput;
}

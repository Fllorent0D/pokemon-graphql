import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_condition_proseOrderByRelationAggregateInput } from '../encounter-condition-prose/encounter-condition-prose-order-by-relation-aggregate.input';
import { encounter_condition_valuesOrderByRelationAggregateInput } from '../encounter-condition-values/encounter-condition-values-order-by-relation-aggregate.input';

@InputType()
export class encounter_conditionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => encounter_condition_proseOrderByRelationAggregateInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseOrderByRelationAggregateInput;

    @Field(() => encounter_condition_valuesOrderByRelationAggregateInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesOrderByRelationAggregateInput;
}

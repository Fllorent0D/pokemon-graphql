import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encounter_method_proseOrderByRelationAggregateInput } from '../encounter-method-prose/encounter-method-prose-order-by-relation-aggregate.input';
import { encounter_slotsOrderByRelationAggregateInput } from '../encounter-slots/encounter-slots-order-by-relation-aggregate.input';
import { location_area_encounter_ratesOrderByRelationAggregateInput } from '../location-area-encounter-rates/location-area-encounter-rates-order-by-relation-aggregate.input';

@InputType()
export class encounter_methodsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => encounter_method_proseOrderByRelationAggregateInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseOrderByRelationAggregateInput;

    @Field(() => encounter_slotsOrderByRelationAggregateInput, {nullable:true})
    encounter_slots?: encounter_slotsOrderByRelationAggregateInput;

    @Field(() => location_area_encounter_ratesOrderByRelationAggregateInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesOrderByRelationAggregateInput;
}

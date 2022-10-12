import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { locationsOrderByWithRelationInput } from '../locations/locations-order-by-with-relation.input';
import { encountersOrderByRelationAggregateInput } from '../encounters/encounters-order-by-relation-aggregate.input';
import { location_area_encounter_ratesOrderByRelationAggregateInput } from '../location-area-encounter-rates/location-area-encounter-rates-order-by-relation-aggregate.input';
import { location_area_proseOrderByRelationAggregateInput } from '../location-area-prose/location-area-prose-order-by-relation-aggregate.input';

@InputType()
export class location_areasOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_index?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => locationsOrderByWithRelationInput, {nullable:true})
    locations?: locationsOrderByWithRelationInput;

    @Field(() => encountersOrderByRelationAggregateInput, {nullable:true})
    encounters?: encountersOrderByRelationAggregateInput;

    @Field(() => location_area_encounter_ratesOrderByRelationAggregateInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesOrderByRelationAggregateInput;

    @Field(() => location_area_proseOrderByRelationAggregateInput, {nullable:true})
    location_area_prose?: location_area_proseOrderByRelationAggregateInput;
}

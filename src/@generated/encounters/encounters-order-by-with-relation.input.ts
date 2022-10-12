import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { encounter_slotsOrderByWithRelationInput } from '../encounter-slots/encounter-slots-order-by-with-relation.input';
import { location_areasOrderByWithRelationInput } from '../location-areas/location-areas-order-by-with-relation.input';
import { versionsOrderByWithRelationInput } from '../versions/versions-order-by-with-relation.input';
import { encounter_condition_value_mapOrderByRelationAggregateInput } from '../encounter-condition-value-map/encounter-condition-value-map-order-by-relation-aggregate.input';

@InputType()
export class encountersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_slot_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_level?: keyof typeof SortOrder;

    @Field(() => pokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: pokemonOrderByWithRelationInput;

    @Field(() => encounter_slotsOrderByWithRelationInput, {nullable:true})
    encounter_slots?: encounter_slotsOrderByWithRelationInput;

    @Field(() => location_areasOrderByWithRelationInput, {nullable:true})
    location_areas?: location_areasOrderByWithRelationInput;

    @Field(() => versionsOrderByWithRelationInput, {nullable:true})
    versions?: versionsOrderByWithRelationInput;

    @Field(() => encounter_condition_value_mapOrderByRelationAggregateInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapOrderByRelationAggregateInput;
}

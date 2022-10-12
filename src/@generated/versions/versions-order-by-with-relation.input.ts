import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { version_groupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { encountersOrderByRelationAggregateInput } from '../encounters/encounters-order-by-relation-aggregate.input';
import { location_area_encounter_ratesOrderByRelationAggregateInput } from '../location-area-encounter-rates/location-area-encounter-rates-order-by-relation-aggregate.input';
import { pokemon_itemsOrderByRelationAggregateInput } from '../pokemon-items/pokemon-items-order-by-relation-aggregate.input';
import { pokemon_species_flavor_textOrderByRelationAggregateInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-order-by-relation-aggregate.input';
import { version_namesOrderByRelationAggregateInput } from '../version-names/version-names-order-by-relation-aggregate.input';

@InputType()
export class versionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => version_groupsOrderByWithRelationInput, {nullable:true})
    version_groups?: version_groupsOrderByWithRelationInput;

    @Field(() => encountersOrderByRelationAggregateInput, {nullable:true})
    encounters?: encountersOrderByRelationAggregateInput;

    @Field(() => location_area_encounter_ratesOrderByRelationAggregateInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesOrderByRelationAggregateInput;

    @Field(() => pokemon_itemsOrderByRelationAggregateInput, {nullable:true})
    pokemon_items?: pokemon_itemsOrderByRelationAggregateInput;

    @Field(() => pokemon_species_flavor_textOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textOrderByRelationAggregateInput;

    @Field(() => version_namesOrderByRelationAggregateInput, {nullable:true})
    version_names?: version_namesOrderByRelationAggregateInput;
}

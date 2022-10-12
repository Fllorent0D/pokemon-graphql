import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Version_groupsRelationFilter } from '../prisma/version-groups-relation-filter.input';
import { EncountersListRelationFilter } from '../prisma/encounters-list-relation-filter.input';
import { Location_area_encounter_ratesListRelationFilter } from '../prisma/location-area-encounter-rates-list-relation-filter.input';
import { Pokemon_itemsListRelationFilter } from '../prisma/pokemon-items-list-relation-filter.input';
import { Pokemon_species_flavor_textListRelationFilter } from '../prisma/pokemon-species-flavor-text-list-relation-filter.input';
import { Version_namesListRelationFilter } from '../prisma/version-names-list-relation-filter.input';

@InputType()
export class versionsWhereInput {

    @Field(() => [versionsWhereInput], {nullable:true})
    AND?: Array<versionsWhereInput>;

    @Field(() => [versionsWhereInput], {nullable:true})
    OR?: Array<versionsWhereInput>;

    @Field(() => [versionsWhereInput], {nullable:true})
    NOT?: Array<versionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Version_groupsRelationFilter, {nullable:true})
    version_groups?: Version_groupsRelationFilter;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: EncountersListRelationFilter;

    @Field(() => Location_area_encounter_ratesListRelationFilter, {nullable:true})
    location_area_encounter_rates?: Location_area_encounter_ratesListRelationFilter;

    @Field(() => Pokemon_itemsListRelationFilter, {nullable:true})
    pokemon_items?: Pokemon_itemsListRelationFilter;

    @Field(() => Pokemon_species_flavor_textListRelationFilter, {nullable:true})
    pokemon_species_flavor_text?: Pokemon_species_flavor_textListRelationFilter;

    @Field(() => Version_namesListRelationFilter, {nullable:true})
    version_names?: Version_namesListRelationFilter;
}

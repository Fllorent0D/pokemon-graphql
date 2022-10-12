import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { version_groups } from '../version-groups/version-groups.model';
import { encounters } from '../encounters/encounters.model';
import { location_area_encounter_rates } from '../location-area-encounter-rates/location-area-encounter-rates.model';
import { pokemon_items } from '../pokemon-items/pokemon-items.model';
import { pokemon_species_flavor_text } from '../pokemon-species-flavor-text/pokemon-species-flavor-text.model';
import { version_names } from '../version-names/version-names.model';
import { VersionsCount } from '../prisma/versions-count.output';

@ObjectType()
export class versions {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => version_groups, {nullable:false})
    version_groups?: version_groups;

    @Field(() => [encounters], {nullable:true})
    encounters?: Array<encounters>;

    @Field(() => [location_area_encounter_rates], {nullable:true})
    location_area_encounter_rates?: Array<location_area_encounter_rates>;

    @Field(() => [pokemon_items], {nullable:true})
    pokemon_items?: Array<pokemon_items>;

    @Field(() => [pokemon_species_flavor_text], {nullable:true})
    pokemon_species_flavor_text?: Array<pokemon_species_flavor_text>;

    @Field(() => [version_names], {nullable:true})
    version_names?: Array<version_names>;

    @Field(() => VersionsCount, {nullable:false})
    _count?: VersionsCount;
}

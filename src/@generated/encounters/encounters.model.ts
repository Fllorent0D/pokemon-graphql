import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon } from '../pokemon/pokemon.model';
import { encounter_slots } from '../encounter-slots/encounter-slots.model';
import { location_areas } from '../location-areas/location-areas.model';
import { versions } from '../versions/versions.model';
import { encounter_condition_value_map } from '../encounter-condition-value-map/encounter-condition-value-map.model';
import { EncountersCount } from '../prisma/encounters-count.output';

@ObjectType()
export class encounters {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    location_area_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_slot_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => pokemon, {nullable:false})
    pokemon?: pokemon;

    @Field(() => encounter_slots, {nullable:false})
    encounter_slots?: encounter_slots;

    @Field(() => location_areas, {nullable:false})
    location_areas?: location_areas;

    @Field(() => versions, {nullable:false})
    versions?: versions;

    @Field(() => [encounter_condition_value_map], {nullable:true})
    encounter_condition_value_map?: Array<encounter_condition_value_map>;

    @Field(() => EncountersCount, {nullable:false})
    _count?: EncountersCount;
}

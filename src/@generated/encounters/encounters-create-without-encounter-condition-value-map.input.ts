import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonCreateNestedOneWithoutEncountersInput } from '../pokemon/pokemon-create-nested-one-without-encounters.input';
import { encounter_slotsCreateNestedOneWithoutEncountersInput } from '../encounter-slots/encounter-slots-create-nested-one-without-encounters.input';
import { location_areasCreateNestedOneWithoutEncountersInput } from '../location-areas/location-areas-create-nested-one-without-encounters.input';
import { versionsCreateNestedOneWithoutEncountersInput } from '../versions/versions-create-nested-one-without-encounters.input';

@InputType()
export class encountersCreateWithoutEncounter_condition_value_mapInput {

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => pokemonCreateNestedOneWithoutEncountersInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutEncountersInput;

    @Field(() => encounter_slotsCreateNestedOneWithoutEncountersInput, {nullable:false})
    encounter_slots!: encounter_slotsCreateNestedOneWithoutEncountersInput;

    @Field(() => location_areasCreateNestedOneWithoutEncountersInput, {nullable:false})
    location_areas!: location_areasCreateNestedOneWithoutEncountersInput;

    @Field(() => versionsCreateNestedOneWithoutEncountersInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutEncountersInput;
}

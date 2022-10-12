import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonCreateNestedOneWithoutEncountersInput } from '../pokemon/pokemon-create-nested-one-without-encounters.input';
import { location_areasCreateNestedOneWithoutEncountersInput } from '../location-areas/location-areas-create-nested-one-without-encounters.input';
import { versionsCreateNestedOneWithoutEncountersInput } from '../versions/versions-create-nested-one-without-encounters.input';
import { encounter_condition_value_mapCreateNestedManyWithoutEncountersInput } from '../encounter-condition-value-map/encounter-condition-value-map-create-nested-many-without-encounters.input';

@InputType()
export class encountersCreateWithoutEncounter_slotsInput {

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => pokemonCreateNestedOneWithoutEncountersInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutEncountersInput;

    @Field(() => location_areasCreateNestedOneWithoutEncountersInput, {nullable:false})
    location_areas!: location_areasCreateNestedOneWithoutEncountersInput;

    @Field(() => versionsCreateNestedOneWithoutEncountersInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutEncountersInput;

    @Field(() => encounter_condition_value_mapCreateNestedManyWithoutEncountersInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapCreateNestedManyWithoutEncountersInput;
}

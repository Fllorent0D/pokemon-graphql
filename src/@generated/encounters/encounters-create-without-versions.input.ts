import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonCreateNestedOneWithoutEncountersInput } from '../pokemon/pokemon-create-nested-one-without-encounters.input';
import { encounter_slotsCreateNestedOneWithoutEncountersInput } from '../encounter-slots/encounter-slots-create-nested-one-without-encounters.input';
import { location_areasCreateNestedOneWithoutEncountersInput } from '../location-areas/location-areas-create-nested-one-without-encounters.input';
import { encounter_condition_value_mapCreateNestedManyWithoutEncountersInput } from '../encounter-condition-value-map/encounter-condition-value-map-create-nested-many-without-encounters.input';

@InputType()
export class encountersCreateWithoutVersionsInput {

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

    @Field(() => encounter_condition_value_mapCreateNestedManyWithoutEncountersInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapCreateNestedManyWithoutEncountersInput;
}

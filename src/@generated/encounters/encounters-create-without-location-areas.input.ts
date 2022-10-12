import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonCreateNestedOneWithoutEncountersInput } from '../pokemon/pokemon-create-nested-one-without-encounters.input';
import { encounter_slotsCreateNestedOneWithoutEncountersInput } from '../encounter-slots/encounter-slots-create-nested-one-without-encounters.input';
import { versionsCreateNestedOneWithoutEncountersInput } from '../versions/versions-create-nested-one-without-encounters.input';
import { encounter_condition_value_mapCreateNestedManyWithoutEncountersInput } from '../encounter-condition-value-map/encounter-condition-value-map-create-nested-many-without-encounters.input';

@InputType()
export class encountersCreateWithoutLocation_areasInput {

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => pokemonCreateNestedOneWithoutEncountersInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutEncountersInput;

    @Field(() => encounter_slotsCreateNestedOneWithoutEncountersInput, {nullable:false})
    encounter_slots!: encounter_slotsCreateNestedOneWithoutEncountersInput;

    @Field(() => versionsCreateNestedOneWithoutEncountersInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutEncountersInput;

    @Field(() => encounter_condition_value_mapCreateNestedManyWithoutEncountersInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapCreateNestedManyWithoutEncountersInput;
}

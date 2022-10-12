import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_condition_value_mapUncheckedCreateNestedManyWithoutEncountersInput } from '../encounter-condition-value-map/encounter-condition-value-map-unchecked-create-nested-many-without-encounters.input';

@InputType()
export class encountersUncheckedCreateWithoutLocation_areasInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_slot_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => encounter_condition_value_mapUncheckedCreateNestedManyWithoutEncountersInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapUncheckedCreateNestedManyWithoutEncountersInput;
}

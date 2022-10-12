import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encounter_condition_values } from '../encounter-condition-values/encounter-condition-values.model';
import { encounters } from '../encounters/encounters.model';

@ObjectType()
export class encounter_condition_value_map {

    @Field(() => Int, {nullable:false})
    encounter_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;

    @Field(() => encounter_condition_values, {nullable:false})
    encounter_condition_values?: encounter_condition_values;

    @Field(() => encounters, {nullable:false})
    encounters?: encounters;
}

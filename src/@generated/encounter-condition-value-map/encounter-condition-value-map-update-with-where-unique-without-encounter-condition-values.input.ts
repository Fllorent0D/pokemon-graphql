import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapUpdateWithoutEncounter_condition_valuesInput } from './encounter-condition-value-map-update-without-encounter-condition-values.input';

@InputType()
export class encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput {

    @Field(() => encounter_condition_value_mapWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    where!: encounter_condition_value_mapWhereUniqueInput;

    @Field(() => encounter_condition_value_mapUpdateWithoutEncounter_condition_valuesInput, {nullable:false})
    @Type(() => encounter_condition_value_mapUpdateWithoutEncounter_condition_valuesInput)
    data!: encounter_condition_value_mapUpdateWithoutEncounter_condition_valuesInput;
}

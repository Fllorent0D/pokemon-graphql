import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapScalarWhereInput } from './encounter-condition-value-map-scalar-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapUncheckedUpdateManyWithoutEncounter_condition_value_mapInput } from './encounter-condition-value-map-unchecked-update-many-without-encounter-condition-value-map.input';

@InputType()
export class encounter_condition_value_mapUpdateManyWithWhereWithoutEncounter_condition_valuesInput {

    @Field(() => encounter_condition_value_mapScalarWhereInput, {nullable:false})
    @Type(() => encounter_condition_value_mapScalarWhereInput)
    where!: encounter_condition_value_mapScalarWhereInput;

    @Field(() => encounter_condition_value_mapUncheckedUpdateManyWithoutEncounter_condition_value_mapInput, {nullable:false})
    @Type(() => encounter_condition_value_mapUncheckedUpdateManyWithoutEncounter_condition_value_mapInput)
    data!: encounter_condition_value_mapUncheckedUpdateManyWithoutEncounter_condition_value_mapInput;
}

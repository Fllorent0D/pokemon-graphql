import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_mapInput } from '../encounter-condition-values/encounter-condition-values-create-nested-one-without-encounter-condition-value-map.input';

@InputType()
export class encounter_condition_value_mapCreateWithoutEncountersInput {

    @Field(() => encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_mapInput, {nullable:false})
    encounter_condition_values!: encounter_condition_valuesCreateNestedOneWithoutEncounter_condition_value_mapInput;
}

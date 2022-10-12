import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput } from '../encounter-condition-values/encounter-condition-values-update-one-required-without-encounter-condition-value-map-nested.input';

@InputType()
export class encounter_condition_value_mapUpdateWithoutEncountersInput {

    @Field(() => encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput;
}

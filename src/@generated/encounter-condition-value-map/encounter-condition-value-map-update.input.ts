import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput } from '../encounter-condition-values/encounter-condition-values-update-one-required-without-encounter-condition-value-map-nested.input';
import { encountersUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput } from '../encounters/encounters-update-one-required-without-encounter-condition-value-map-nested.input';

@InputType()
export class encounter_condition_value_mapUpdateInput {

    @Field(() => encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput;

    @Field(() => encountersUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput, {nullable:true})
    encounters?: encountersUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput;
}

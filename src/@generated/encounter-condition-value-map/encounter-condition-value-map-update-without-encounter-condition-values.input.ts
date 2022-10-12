import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput } from '../encounters/encounters-update-one-required-without-encounter-condition-value-map-nested.input';

@InputType()
export class encounter_condition_value_mapUpdateWithoutEncounter_condition_valuesInput {

    @Field(() => encountersUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput, {nullable:true})
    encounters?: encountersUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput } from '../encounter-condition-values/encounter-condition-values-update-one-required-without-encounter-condition-value-prose-nested.input';

@InputType()
export class encounter_condition_value_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput;
}

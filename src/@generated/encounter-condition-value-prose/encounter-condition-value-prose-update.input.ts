import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput } from '../languages/languages-update-one-required-without-encounter-condition-value-prose-nested.input';
import { encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput } from '../encounter-condition-values/encounter-condition-values-update-one-required-without-encounter-condition-value-prose-nested.input';

@InputType()
export class encounter_condition_value_proseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput;

    @Field(() => encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput;
}

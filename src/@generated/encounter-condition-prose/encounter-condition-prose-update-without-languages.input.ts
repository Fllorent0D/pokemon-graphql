import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_conditionsUpdateOneRequiredWithoutEncounter_condition_proseNestedInput } from '../encounter-conditions/encounter-conditions-update-one-required-without-encounter-condition-prose-nested.input';

@InputType()
export class encounter_condition_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_conditionsUpdateOneRequiredWithoutEncounter_condition_proseNestedInput, {nullable:true})
    encounter_conditions?: encounter_conditionsUpdateOneRequiredWithoutEncounter_condition_proseNestedInput;
}

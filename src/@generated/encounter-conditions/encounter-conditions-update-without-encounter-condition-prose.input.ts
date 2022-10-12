import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_condition_valuesUpdateManyWithoutEncounter_conditionsNestedInput } from '../encounter-condition-values/encounter-condition-values-update-many-without-encounter-conditions-nested.input';

@InputType()
export class encounter_conditionsUpdateWithoutEncounter_condition_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_condition_valuesUpdateManyWithoutEncounter_conditionsNestedInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesUpdateManyWithoutEncounter_conditionsNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_condition_valuesUncheckedUpdateManyWithoutEncounter_conditionsNestedInput } from '../encounter-condition-values/encounter-condition-values-unchecked-update-many-without-encounter-conditions-nested.input';

@InputType()
export class encounter_conditionsUncheckedUpdateWithoutEncounter_condition_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_condition_valuesUncheckedUpdateManyWithoutEncounter_conditionsNestedInput, {nullable:true})
    encounter_condition_values?: encounter_condition_valuesUncheckedUpdateManyWithoutEncounter_conditionsNestedInput;
}

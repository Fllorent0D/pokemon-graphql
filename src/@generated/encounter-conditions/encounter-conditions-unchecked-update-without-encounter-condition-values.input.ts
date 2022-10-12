import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_condition_proseUncheckedUpdateManyWithoutEncounter_conditionsNestedInput } from '../encounter-condition-prose/encounter-condition-prose-unchecked-update-many-without-encounter-conditions-nested.input';

@InputType()
export class encounter_conditionsUncheckedUpdateWithoutEncounter_condition_valuesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_condition_proseUncheckedUpdateManyWithoutEncounter_conditionsNestedInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseUncheckedUpdateManyWithoutEncounter_conditionsNestedInput;
}

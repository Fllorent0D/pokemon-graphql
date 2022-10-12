import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { encounter_condition_value_proseUncheckedUpdateManyWithoutEncounter_condition_valuesNestedInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-unchecked-update-many-without-encounter-condition-values-nested.input';

@InputType()
export class encounter_condition_valuesUncheckedUpdateWithoutEncounter_condition_value_mapInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    encounter_condition_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_default?: BoolFieldUpdateOperationsInput;

    @Field(() => encounter_condition_value_proseUncheckedUpdateManyWithoutEncounter_condition_valuesNestedInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseUncheckedUpdateManyWithoutEncounter_condition_valuesNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_method_proseUncheckedUpdateManyWithoutEncounter_methodsNestedInput } from '../encounter-method-prose/encounter-method-prose-unchecked-update-many-without-encounter-methods-nested.input';
import { encounter_slotsUncheckedUpdateManyWithoutEncounter_methodsNestedInput } from '../encounter-slots/encounter-slots-unchecked-update-many-without-encounter-methods-nested.input';

@InputType()
export class encounter_methodsUncheckedUpdateWithoutLocation_area_encounter_ratesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_method_proseUncheckedUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseUncheckedUpdateManyWithoutEncounter_methodsNestedInput;

    @Field(() => encounter_slotsUncheckedUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    encounter_slots?: encounter_slotsUncheckedUpdateManyWithoutEncounter_methodsNestedInput;
}

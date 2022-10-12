import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_method_proseUpdateManyWithoutEncounter_methodsNestedInput } from '../encounter-method-prose/encounter-method-prose-update-many-without-encounter-methods-nested.input';
import { encounter_slotsUpdateManyWithoutEncounter_methodsNestedInput } from '../encounter-slots/encounter-slots-update-many-without-encounter-methods-nested.input';

@InputType()
export class encounter_methodsUpdateWithoutLocation_area_encounter_ratesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_method_proseUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseUpdateManyWithoutEncounter_methodsNestedInput;

    @Field(() => encounter_slotsUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    encounter_slots?: encounter_slotsUpdateManyWithoutEncounter_methodsNestedInput;
}

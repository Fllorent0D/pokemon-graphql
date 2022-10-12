import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_slotsUncheckedUpdateManyWithoutEncounter_methodsNestedInput } from '../encounter-slots/encounter-slots-unchecked-update-many-without-encounter-methods-nested.input';
import { location_area_encounter_ratesUncheckedUpdateManyWithoutEncounter_methodsNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-encounter-methods-nested.input';

@InputType()
export class encounter_methodsUncheckedUpdateWithoutEncounter_method_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_slotsUncheckedUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    encounter_slots?: encounter_slotsUncheckedUpdateManyWithoutEncounter_methodsNestedInput;

    @Field(() => location_area_encounter_ratesUncheckedUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUncheckedUpdateManyWithoutEncounter_methodsNestedInput;
}

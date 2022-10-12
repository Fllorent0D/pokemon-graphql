import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_method_proseUncheckedUpdateManyWithoutEncounter_methodsNestedInput } from '../encounter-method-prose/encounter-method-prose-unchecked-update-many-without-encounter-methods-nested.input';
import { location_area_encounter_ratesUncheckedUpdateManyWithoutEncounter_methodsNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-encounter-methods-nested.input';

@InputType()
export class encounter_methodsUncheckedUpdateWithoutEncounter_slotsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_method_proseUncheckedUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseUncheckedUpdateManyWithoutEncounter_methodsNestedInput;

    @Field(() => location_area_encounter_ratesUncheckedUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUncheckedUpdateManyWithoutEncounter_methodsNestedInput;
}

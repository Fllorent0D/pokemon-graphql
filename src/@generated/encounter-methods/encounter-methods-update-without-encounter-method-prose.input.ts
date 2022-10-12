import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_slotsUpdateManyWithoutEncounter_methodsNestedInput } from '../encounter-slots/encounter-slots-update-many-without-encounter-methods-nested.input';
import { location_area_encounter_ratesUpdateManyWithoutEncounter_methodsNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-encounter-methods-nested.input';

@InputType()
export class encounter_methodsUpdateWithoutEncounter_method_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_slotsUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    encounter_slots?: encounter_slotsUpdateManyWithoutEncounter_methodsNestedInput;

    @Field(() => location_area_encounter_ratesUpdateManyWithoutEncounter_methodsNestedInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUpdateManyWithoutEncounter_methodsNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { location_area_encounter_ratesUncheckedUpdateManyWithoutLocation_areasNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-update-many-without-location-areas-nested.input';
import { location_area_proseUncheckedUpdateManyWithoutLocation_areasNestedInput } from '../location-area-prose/location-area-prose-unchecked-update-many-without-location-areas-nested.input';

@InputType()
export class location_areasUncheckedUpdateWithoutEncountersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    location_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => location_area_encounter_ratesUncheckedUpdateManyWithoutLocation_areasNestedInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUncheckedUpdateManyWithoutLocation_areasNestedInput;

    @Field(() => location_area_proseUncheckedUpdateManyWithoutLocation_areasNestedInput, {nullable:true})
    location_area_prose?: location_area_proseUncheckedUpdateManyWithoutLocation_areasNestedInput;
}

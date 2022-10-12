import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { locationsUpdateOneRequiredWithoutLocation_areasNestedInput } from '../locations/locations-update-one-required-without-location-areas-nested.input';
import { encountersUpdateManyWithoutLocation_areasNestedInput } from '../encounters/encounters-update-many-without-location-areas-nested.input';
import { location_area_encounter_ratesUpdateManyWithoutLocation_areasNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-location-areas-nested.input';

@InputType()
export class location_areasUpdateWithoutLocation_area_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => locationsUpdateOneRequiredWithoutLocation_areasNestedInput, {nullable:true})
    locations?: locationsUpdateOneRequiredWithoutLocation_areasNestedInput;

    @Field(() => encountersUpdateManyWithoutLocation_areasNestedInput, {nullable:true})
    encounters?: encountersUpdateManyWithoutLocation_areasNestedInput;

    @Field(() => location_area_encounter_ratesUpdateManyWithoutLocation_areasNestedInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUpdateManyWithoutLocation_areasNestedInput;
}

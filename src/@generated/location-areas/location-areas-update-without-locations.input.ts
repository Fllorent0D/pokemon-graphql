import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { encountersUpdateManyWithoutLocation_areasNestedInput } from '../encounters/encounters-update-many-without-location-areas-nested.input';
import { location_area_encounter_ratesUpdateManyWithoutLocation_areasNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-location-areas-nested.input';
import { location_area_proseUpdateManyWithoutLocation_areasNestedInput } from '../location-area-prose/location-area-prose-update-many-without-location-areas-nested.input';

@InputType()
export class location_areasUpdateWithoutLocationsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    game_index?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    identifier?: NullableStringFieldUpdateOperationsInput;

    @Field(() => encountersUpdateManyWithoutLocation_areasNestedInput, {nullable:true})
    encounters?: encountersUpdateManyWithoutLocation_areasNestedInput;

    @Field(() => location_area_encounter_ratesUpdateManyWithoutLocation_areasNestedInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUpdateManyWithoutLocation_areasNestedInput;

    @Field(() => location_area_proseUpdateManyWithoutLocation_areasNestedInput, {nullable:true})
    location_area_prose?: location_area_proseUpdateManyWithoutLocation_areasNestedInput;
}

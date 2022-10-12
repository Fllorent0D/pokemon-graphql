import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { versionsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput } from '../versions/versions-update-one-required-without-location-area-encounter-rates-nested.input';
import { encounter_methodsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-location-area-encounter-rates-nested.input';
import { location_areasUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput } from '../location-areas/location-areas-update-one-required-without-location-area-encounter-rates-nested.input';

@InputType()
export class location_area_encounter_ratesUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    rate?: NullableIntFieldUpdateOperationsInput;

    @Field(() => versionsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput, {nullable:true})
    versions?: versionsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput;

    @Field(() => encounter_methodsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput, {nullable:true})
    encounter_methods?: encounter_methodsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput;

    @Field(() => location_areasUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput, {nullable:true})
    location_areas?: location_areasUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput;
}

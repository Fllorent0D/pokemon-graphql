import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { versionsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput } from '../versions/versions-update-one-required-without-location-area-encounter-rates-nested.input';
import { encounter_methodsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-location-area-encounter-rates-nested.input';

@InputType()
export class location_area_encounter_ratesUpdateWithoutLocation_areasInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    rate?: NullableIntFieldUpdateOperationsInput;

    @Field(() => versionsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput, {nullable:true})
    versions?: versionsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput;

    @Field(() => encounter_methodsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput, {nullable:true})
    encounter_methods?: encounter_methodsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput;
}

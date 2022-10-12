import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { location_areasUpdateOneRequiredWithoutLocation_area_proseNestedInput } from '../location-areas/location-areas-update-one-required-without-location-area-prose-nested.input';

@InputType()
export class location_area_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => location_areasUpdateOneRequiredWithoutLocation_area_proseNestedInput, {nullable:true})
    location_areas?: location_areasUpdateOneRequiredWithoutLocation_area_proseNestedInput;
}

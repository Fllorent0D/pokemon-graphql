import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { locationsUpdateOneRequiredWithoutLocation_namesNestedInput } from '../locations/locations-update-one-required-without-location-names-nested.input';

@InputType()
export class location_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => locationsUpdateOneRequiredWithoutLocation_namesNestedInput, {nullable:true})
    locations?: locationsUpdateOneRequiredWithoutLocation_namesNestedInput;
}

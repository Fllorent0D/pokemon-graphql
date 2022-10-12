import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutLocation_namesNestedInput } from '../languages/languages-update-one-required-without-location-names-nested.input';
import { locationsUpdateOneRequiredWithoutLocation_namesNestedInput } from '../locations/locations-update-one-required-without-location-names-nested.input';

@InputType()
export class location_namesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutLocation_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutLocation_namesNestedInput;

    @Field(() => locationsUpdateOneRequiredWithoutLocation_namesNestedInput, {nullable:true})
    locations?: locationsUpdateOneRequiredWithoutLocation_namesNestedInput;
}

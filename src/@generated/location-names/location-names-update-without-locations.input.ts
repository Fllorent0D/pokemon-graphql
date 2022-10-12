import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutLocation_namesNestedInput } from '../languages/languages-update-one-required-without-location-names-nested.input';

@InputType()
export class location_namesUpdateWithoutLocationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutLocation_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutLocation_namesNestedInput;
}

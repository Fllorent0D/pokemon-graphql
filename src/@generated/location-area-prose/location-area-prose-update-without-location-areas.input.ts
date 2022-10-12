import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutLocation_area_proseNestedInput } from '../languages/languages-update-one-required-without-location-area-prose-nested.input';

@InputType()
export class location_area_proseUpdateWithoutLocation_areasInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutLocation_area_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutLocation_area_proseNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { regionsUpdateOneRequiredWithoutRegion_namesNestedInput } from '../regions/regions-update-one-required-without-region-names-nested.input';

@InputType()
export class region_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => regionsUpdateOneRequiredWithoutRegion_namesNestedInput, {nullable:true})
    regions?: regionsUpdateOneRequiredWithoutRegion_namesNestedInput;
}

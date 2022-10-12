import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutRegion_namesNestedInput } from '../languages/languages-update-one-required-without-region-names-nested.input';
import { regionsUpdateOneRequiredWithoutRegion_namesNestedInput } from '../regions/regions-update-one-required-without-region-names-nested.input';

@InputType()
export class region_namesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutRegion_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutRegion_namesNestedInput;

    @Field(() => regionsUpdateOneRequiredWithoutRegion_namesNestedInput, {nullable:true})
    regions?: regionsUpdateOneRequiredWithoutRegion_namesNestedInput;
}

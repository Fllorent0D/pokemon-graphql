import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutRegion_namesNestedInput } from '../languages/languages-update-one-required-without-region-names-nested.input';

@InputType()
export class region_namesUpdateWithoutRegionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutRegion_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutRegion_namesNestedInput;
}

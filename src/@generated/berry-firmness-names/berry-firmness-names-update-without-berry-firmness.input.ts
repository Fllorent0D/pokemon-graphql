import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutBerry_firmness_namesNestedInput } from '../languages/languages-update-one-required-without-berry-firmness-names-nested.input';

@InputType()
export class berry_firmness_namesUpdateWithoutBerry_firmnessInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutBerry_firmness_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutBerry_firmness_namesNestedInput;
}

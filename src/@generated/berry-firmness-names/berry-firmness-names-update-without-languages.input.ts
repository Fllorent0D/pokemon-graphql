import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { berry_firmnessUpdateOneRequiredWithoutBerry_firmness_namesNestedInput } from '../berry-firmness/berry-firmness-update-one-required-without-berry-firmness-names-nested.input';

@InputType()
export class berry_firmness_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => berry_firmnessUpdateOneRequiredWithoutBerry_firmness_namesNestedInput, {nullable:true})
    berry_firmness?: berry_firmnessUpdateOneRequiredWithoutBerry_firmness_namesNestedInput;
}

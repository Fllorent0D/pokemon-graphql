import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { typesUpdateOneRequiredWithoutType_namesNestedInput } from '../types/types-update-one-required-without-type-names-nested.input';

@InputType()
export class type_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => typesUpdateOneRequiredWithoutType_namesNestedInput, {nullable:true})
    types?: typesUpdateOneRequiredWithoutType_namesNestedInput;
}

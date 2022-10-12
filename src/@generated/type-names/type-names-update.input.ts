import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutType_namesNestedInput } from '../languages/languages-update-one-required-without-type-names-nested.input';
import { typesUpdateOneRequiredWithoutType_namesNestedInput } from '../types/types-update-one-required-without-type-names-nested.input';

@InputType()
export class type_namesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutType_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutType_namesNestedInput;

    @Field(() => typesUpdateOneRequiredWithoutType_namesNestedInput, {nullable:true})
    types?: typesUpdateOneRequiredWithoutType_namesNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutNature_namesNestedInput } from '../languages/languages-update-one-required-without-nature-names-nested.input';

@InputType()
export class nature_namesUpdateWithoutNaturesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutNature_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutNature_namesNestedInput;
}

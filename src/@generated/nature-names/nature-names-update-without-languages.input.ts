import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { naturesUpdateOneRequiredWithoutNature_namesNestedInput } from '../natures/natures-update-one-required-without-nature-names-nested.input';

@InputType()
export class nature_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => naturesUpdateOneRequiredWithoutNature_namesNestedInput, {nullable:true})
    natures?: naturesUpdateOneRequiredWithoutNature_namesNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_namesNestedInput } from '../languages/languages-update-one-required-without-move-names-nested.input';

@InputType()
export class move_namesUpdateWithoutMovesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_namesNestedInput;
}

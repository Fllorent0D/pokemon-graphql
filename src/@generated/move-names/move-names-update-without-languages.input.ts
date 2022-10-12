import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { movesUpdateOneRequiredWithoutMove_namesNestedInput } from '../moves/moves-update-one-required-without-move-names-nested.input';

@InputType()
export class move_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => movesUpdateOneRequiredWithoutMove_namesNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_namesNestedInput;
}

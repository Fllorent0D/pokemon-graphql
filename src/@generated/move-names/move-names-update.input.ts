import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_namesNestedInput } from '../languages/languages-update-one-required-without-move-names-nested.input';
import { movesUpdateOneRequiredWithoutMove_namesNestedInput } from '../moves/moves-update-one-required-without-move-names-nested.input';

@InputType()
export class move_namesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_namesNestedInput;

    @Field(() => movesUpdateOneRequiredWithoutMove_namesNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_namesNestedInput;
}

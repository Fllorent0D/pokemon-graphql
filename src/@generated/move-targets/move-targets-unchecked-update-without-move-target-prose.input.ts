import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { movesUncheckedUpdateManyWithoutMove_targetsNestedInput } from '../moves/moves-unchecked-update-many-without-move-targets-nested.input';

@InputType()
export class move_targetsUncheckedUpdateWithoutMove_target_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => movesUncheckedUpdateManyWithoutMove_targetsNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutMove_targetsNestedInput;
}

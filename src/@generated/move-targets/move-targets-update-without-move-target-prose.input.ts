import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { movesUpdateManyWithoutMove_targetsNestedInput } from '../moves/moves-update-many-without-move-targets-nested.input';

@InputType()
export class move_targetsUpdateWithoutMove_target_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => movesUpdateManyWithoutMove_targetsNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutMove_targetsNestedInput;
}

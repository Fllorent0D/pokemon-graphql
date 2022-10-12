import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_target_proseUpdateManyWithoutMove_targetsNestedInput } from '../move-target-prose/move-target-prose-update-many-without-move-targets-nested.input';

@InputType()
export class move_targetsUpdateWithoutMovesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_target_proseUpdateManyWithoutMove_targetsNestedInput, {nullable:true})
    move_target_prose?: move_target_proseUpdateManyWithoutMove_targetsNestedInput;
}

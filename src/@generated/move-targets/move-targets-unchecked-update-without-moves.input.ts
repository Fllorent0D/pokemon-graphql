import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_target_proseUncheckedUpdateManyWithoutMove_targetsNestedInput } from '../move-target-prose/move-target-prose-unchecked-update-many-without-move-targets-nested.input';

@InputType()
export class move_targetsUncheckedUpdateWithoutMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_target_proseUncheckedUpdateManyWithoutMove_targetsNestedInput, {nullable:true})
    move_target_prose?: move_target_proseUncheckedUpdateManyWithoutMove_targetsNestedInput;
}

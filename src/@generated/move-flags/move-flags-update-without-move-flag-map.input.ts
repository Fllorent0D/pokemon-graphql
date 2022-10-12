import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_flag_proseUpdateManyWithoutMove_flagsNestedInput } from '../move-flag-prose/move-flag-prose-update-many-without-move-flags-nested.input';

@InputType()
export class move_flagsUpdateWithoutMove_flag_mapInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_flag_proseUpdateManyWithoutMove_flagsNestedInput, {nullable:true})
    move_flag_prose?: move_flag_proseUpdateManyWithoutMove_flagsNestedInput;
}

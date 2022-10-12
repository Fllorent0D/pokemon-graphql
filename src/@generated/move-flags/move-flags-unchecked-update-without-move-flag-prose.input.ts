import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_flag_mapUncheckedUpdateManyWithoutMove_flagsNestedInput } from '../move-flag-map/move-flag-map-unchecked-update-many-without-move-flags-nested.input';

@InputType()
export class move_flagsUncheckedUpdateWithoutMove_flag_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_flag_mapUncheckedUpdateManyWithoutMove_flagsNestedInput, {nullable:true})
    move_flag_map?: move_flag_mapUncheckedUpdateManyWithoutMove_flagsNestedInput;
}

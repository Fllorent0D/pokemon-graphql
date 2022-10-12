import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_flag_mapUpdateManyWithoutMove_flagsNestedInput } from '../move-flag-map/move-flag-map-update-many-without-move-flags-nested.input';

@InputType()
export class move_flagsUpdateWithoutMove_flag_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_flag_mapUpdateManyWithoutMove_flagsNestedInput, {nullable:true})
    move_flag_map?: move_flag_mapUpdateManyWithoutMove_flagsNestedInput;
}

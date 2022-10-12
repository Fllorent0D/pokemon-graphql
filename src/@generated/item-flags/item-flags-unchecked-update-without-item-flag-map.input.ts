import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_flag_proseUncheckedUpdateManyWithoutItem_flagsNestedInput } from '../item-flag-prose/item-flag-prose-unchecked-update-many-without-item-flags-nested.input';

@InputType()
export class item_flagsUncheckedUpdateWithoutItem_flag_mapInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_flag_proseUncheckedUpdateManyWithoutItem_flagsNestedInput, {nullable:true})
    item_flag_prose?: item_flag_proseUncheckedUpdateManyWithoutItem_flagsNestedInput;
}

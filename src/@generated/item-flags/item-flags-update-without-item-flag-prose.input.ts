import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_flag_mapUpdateManyWithoutItem_flagsNestedInput } from '../item-flag-map/item-flag-map-update-many-without-item-flags-nested.input';

@InputType()
export class item_flagsUpdateWithoutItem_flag_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_flag_mapUpdateManyWithoutItem_flagsNestedInput, {nullable:true})
    item_flag_map?: item_flag_mapUpdateManyWithoutItem_flagsNestedInput;
}

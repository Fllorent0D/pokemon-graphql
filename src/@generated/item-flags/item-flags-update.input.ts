import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_flag_mapUpdateManyWithoutItem_flagsNestedInput } from '../item-flag-map/item-flag-map-update-many-without-item-flags-nested.input';
import { item_flag_proseUpdateManyWithoutItem_flagsNestedInput } from '../item-flag-prose/item-flag-prose-update-many-without-item-flags-nested.input';

@InputType()
export class item_flagsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_flag_mapUpdateManyWithoutItem_flagsNestedInput, {nullable:true})
    item_flag_map?: item_flag_mapUpdateManyWithoutItem_flagsNestedInput;

    @Field(() => item_flag_proseUpdateManyWithoutItem_flagsNestedInput, {nullable:true})
    item_flag_prose?: item_flag_proseUpdateManyWithoutItem_flagsNestedInput;
}

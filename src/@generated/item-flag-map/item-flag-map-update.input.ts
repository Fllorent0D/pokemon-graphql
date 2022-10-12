import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsUpdateOneRequiredWithoutItem_flag_mapNestedInput } from '../item-flags/item-flags-update-one-required-without-item-flag-map-nested.input';
import { itemsUpdateOneRequiredWithoutItem_flag_mapNestedInput } from '../items/items-update-one-required-without-item-flag-map-nested.input';

@InputType()
export class item_flag_mapUpdateInput {

    @Field(() => item_flagsUpdateOneRequiredWithoutItem_flag_mapNestedInput, {nullable:true})
    item_flags?: item_flagsUpdateOneRequiredWithoutItem_flag_mapNestedInput;

    @Field(() => itemsUpdateOneRequiredWithoutItem_flag_mapNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutItem_flag_mapNestedInput;
}

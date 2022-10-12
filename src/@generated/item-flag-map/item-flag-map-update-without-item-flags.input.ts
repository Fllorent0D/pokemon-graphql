import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateOneRequiredWithoutItem_flag_mapNestedInput } from '../items/items-update-one-required-without-item-flag-map-nested.input';

@InputType()
export class item_flag_mapUpdateWithoutItem_flagsInput {

    @Field(() => itemsUpdateOneRequiredWithoutItem_flag_mapNestedInput, {nullable:true})
    items?: itemsUpdateOneRequiredWithoutItem_flag_mapNestedInput;
}

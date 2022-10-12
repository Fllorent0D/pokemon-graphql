import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_pocketsUpdateOneRequiredWithoutItem_categoriesNestedInput } from '../item-pockets/item-pockets-update-one-required-without-item-categories-nested.input';
import { itemsUpdateManyWithoutItem_categoriesNestedInput } from '../items/items-update-many-without-item-categories-nested.input';

@InputType()
export class item_categoriesUpdateWithoutItem_category_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_pocketsUpdateOneRequiredWithoutItem_categoriesNestedInput, {nullable:true})
    item_pockets?: item_pocketsUpdateOneRequiredWithoutItem_categoriesNestedInput;

    @Field(() => itemsUpdateManyWithoutItem_categoriesNestedInput, {nullable:true})
    items?: itemsUpdateManyWithoutItem_categoriesNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_category_proseUpdateManyWithoutItem_categoriesNestedInput } from '../item-category-prose/item-category-prose-update-many-without-item-categories-nested.input';
import { itemsUpdateManyWithoutItem_categoriesNestedInput } from '../items/items-update-many-without-item-categories-nested.input';

@InputType()
export class item_categoriesUpdateWithoutItem_pocketsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_category_proseUpdateManyWithoutItem_categoriesNestedInput, {nullable:true})
    item_category_prose?: item_category_proseUpdateManyWithoutItem_categoriesNestedInput;

    @Field(() => itemsUpdateManyWithoutItem_categoriesNestedInput, {nullable:true})
    items?: itemsUpdateManyWithoutItem_categoriesNestedInput;
}

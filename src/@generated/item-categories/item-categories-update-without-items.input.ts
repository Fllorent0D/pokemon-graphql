import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_pocketsUpdateOneRequiredWithoutItem_categoriesNestedInput } from '../item-pockets/item-pockets-update-one-required-without-item-categories-nested.input';
import { item_category_proseUpdateManyWithoutItem_categoriesNestedInput } from '../item-category-prose/item-category-prose-update-many-without-item-categories-nested.input';

@InputType()
export class item_categoriesUpdateWithoutItemsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_pocketsUpdateOneRequiredWithoutItem_categoriesNestedInput, {nullable:true})
    item_pockets?: item_pocketsUpdateOneRequiredWithoutItem_categoriesNestedInput;

    @Field(() => item_category_proseUpdateManyWithoutItem_categoriesNestedInput, {nullable:true})
    item_category_prose?: item_category_proseUpdateManyWithoutItem_categoriesNestedInput;
}

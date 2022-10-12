import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_categoriesUpdateOneRequiredWithoutItem_category_proseNestedInput } from '../item-categories/item-categories-update-one-required-without-item-category-prose-nested.input';

@InputType()
export class item_category_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => item_categoriesUpdateOneRequiredWithoutItem_category_proseNestedInput, {nullable:true})
    item_categories?: item_categoriesUpdateOneRequiredWithoutItem_category_proseNestedInput;
}

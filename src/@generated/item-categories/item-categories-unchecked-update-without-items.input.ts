import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_category_proseUncheckedUpdateManyWithoutItem_categoriesNestedInput } from '../item-category-prose/item-category-prose-unchecked-update-many-without-item-categories-nested.input';

@InputType()
export class item_categoriesUncheckedUpdateWithoutItemsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pocket_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_category_proseUncheckedUpdateManyWithoutItem_categoriesNestedInput, {nullable:true})
    item_category_prose?: item_category_proseUncheckedUpdateManyWithoutItem_categoriesNestedInput;
}

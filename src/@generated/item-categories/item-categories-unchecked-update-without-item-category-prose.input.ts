import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { itemsUncheckedUpdateManyWithoutItem_categoriesNestedInput } from '../items/items-unchecked-update-many-without-item-categories-nested.input';

@InputType()
export class item_categoriesUncheckedUpdateWithoutItem_category_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pocket_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => itemsUncheckedUpdateManyWithoutItem_categoriesNestedInput, {nullable:true})
    items?: itemsUncheckedUpdateManyWithoutItem_categoriesNestedInput;
}

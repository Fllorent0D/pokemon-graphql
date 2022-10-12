import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_categoriesUncheckedUpdateManyWithoutItem_pocketsNestedInput } from '../item-categories/item-categories-unchecked-update-many-without-item-pockets-nested.input';

@InputType()
export class item_pocketsUncheckedUpdateWithoutItem_pocket_namesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_categoriesUncheckedUpdateManyWithoutItem_pocketsNestedInput, {nullable:true})
    item_categories?: item_categoriesUncheckedUpdateManyWithoutItem_pocketsNestedInput;
}

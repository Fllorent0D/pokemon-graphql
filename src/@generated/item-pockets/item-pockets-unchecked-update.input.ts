import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_categoriesUncheckedUpdateManyWithoutItem_pocketsNestedInput } from '../item-categories/item-categories-unchecked-update-many-without-item-pockets-nested.input';
import { item_pocket_namesUncheckedUpdateManyWithoutItem_pocketsNestedInput } from '../item-pocket-names/item-pocket-names-unchecked-update-many-without-item-pockets-nested.input';

@InputType()
export class item_pocketsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_categoriesUncheckedUpdateManyWithoutItem_pocketsNestedInput, {nullable:true})
    item_categories?: item_categoriesUncheckedUpdateManyWithoutItem_pocketsNestedInput;

    @Field(() => item_pocket_namesUncheckedUpdateManyWithoutItem_pocketsNestedInput, {nullable:true})
    item_pocket_names?: item_pocket_namesUncheckedUpdateManyWithoutItem_pocketsNestedInput;
}

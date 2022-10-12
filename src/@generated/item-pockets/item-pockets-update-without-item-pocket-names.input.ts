import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_categoriesUpdateManyWithoutItem_pocketsNestedInput } from '../item-categories/item-categories-update-many-without-item-pockets-nested.input';

@InputType()
export class item_pocketsUpdateWithoutItem_pocket_namesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_categoriesUpdateManyWithoutItem_pocketsNestedInput, {nullable:true})
    item_categories?: item_categoriesUpdateManyWithoutItem_pocketsNestedInput;
}

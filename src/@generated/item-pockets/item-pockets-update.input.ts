import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { item_categoriesUpdateManyWithoutItem_pocketsNestedInput } from '../item-categories/item-categories-update-many-without-item-pockets-nested.input';
import { item_pocket_namesUpdateManyWithoutItem_pocketsNestedInput } from '../item-pocket-names/item-pocket-names-update-many-without-item-pockets-nested.input';

@InputType()
export class item_pocketsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => item_categoriesUpdateManyWithoutItem_pocketsNestedInput, {nullable:true})
    item_categories?: item_categoriesUpdateManyWithoutItem_pocketsNestedInput;

    @Field(() => item_pocket_namesUpdateManyWithoutItem_pocketsNestedInput, {nullable:true})
    item_pocket_names?: item_pocket_namesUpdateManyWithoutItem_pocketsNestedInput;
}

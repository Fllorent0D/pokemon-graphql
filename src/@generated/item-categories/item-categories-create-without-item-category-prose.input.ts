import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsCreateNestedOneWithoutItem_categoriesInput } from '../item-pockets/item-pockets-create-nested-one-without-item-categories.input';
import { itemsCreateNestedManyWithoutItem_categoriesInput } from '../items/items-create-nested-many-without-item-categories.input';

@InputType()
export class item_categoriesCreateWithoutItem_category_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_pocketsCreateNestedOneWithoutItem_categoriesInput, {nullable:false})
    item_pockets!: item_pocketsCreateNestedOneWithoutItem_categoriesInput;

    @Field(() => itemsCreateNestedManyWithoutItem_categoriesInput, {nullable:true})
    items?: itemsCreateNestedManyWithoutItem_categoriesInput;
}

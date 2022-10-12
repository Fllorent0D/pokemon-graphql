import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsCreateNestedOneWithoutItem_categoriesInput } from '../item-pockets/item-pockets-create-nested-one-without-item-categories.input';
import { item_category_proseCreateNestedManyWithoutItem_categoriesInput } from '../item-category-prose/item-category-prose-create-nested-many-without-item-categories.input';
import { itemsCreateNestedManyWithoutItem_categoriesInput } from '../items/items-create-nested-many-without-item-categories.input';

@InputType()
export class item_categoriesCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_pocketsCreateNestedOneWithoutItem_categoriesInput, {nullable:false})
    item_pockets!: item_pocketsCreateNestedOneWithoutItem_categoriesInput;

    @Field(() => item_category_proseCreateNestedManyWithoutItem_categoriesInput, {nullable:true})
    item_category_prose?: item_category_proseCreateNestedManyWithoutItem_categoriesInput;

    @Field(() => itemsCreateNestedManyWithoutItem_categoriesInput, {nullable:true})
    items?: itemsCreateNestedManyWithoutItem_categoriesInput;
}

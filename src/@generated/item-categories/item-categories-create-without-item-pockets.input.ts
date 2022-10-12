import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseCreateNestedManyWithoutItem_categoriesInput } from '../item-category-prose/item-category-prose-create-nested-many-without-item-categories.input';
import { itemsCreateNestedManyWithoutItem_categoriesInput } from '../items/items-create-nested-many-without-item-categories.input';

@InputType()
export class item_categoriesCreateWithoutItem_pocketsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_category_proseCreateNestedManyWithoutItem_categoriesInput, {nullable:true})
    item_category_prose?: item_category_proseCreateNestedManyWithoutItem_categoriesInput;

    @Field(() => itemsCreateNestedManyWithoutItem_categoriesInput, {nullable:true})
    items?: itemsCreateNestedManyWithoutItem_categoriesInput;
}

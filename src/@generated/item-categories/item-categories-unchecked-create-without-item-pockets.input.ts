import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_category_proseUncheckedCreateNestedManyWithoutItem_categoriesInput } from '../item-category-prose/item-category-prose-unchecked-create-nested-many-without-item-categories.input';
import { itemsUncheckedCreateNestedManyWithoutItem_categoriesInput } from '../items/items-unchecked-create-nested-many-without-item-categories.input';

@InputType()
export class item_categoriesUncheckedCreateWithoutItem_pocketsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => item_category_proseUncheckedCreateNestedManyWithoutItem_categoriesInput, {nullable:true})
    item_category_prose?: item_category_proseUncheckedCreateNestedManyWithoutItem_categoriesInput;

    @Field(() => itemsUncheckedCreateNestedManyWithoutItem_categoriesInput, {nullable:true})
    items?: itemsUncheckedCreateNestedManyWithoutItem_categoriesInput;
}

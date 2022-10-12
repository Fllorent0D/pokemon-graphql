import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesCreateNestedOneWithoutItem_category_proseInput } from '../item-categories/item-categories-create-nested-one-without-item-category-prose.input';

@InputType()
export class item_category_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => item_categoriesCreateNestedOneWithoutItem_category_proseInput, {nullable:false})
    item_categories!: item_categoriesCreateNestedOneWithoutItem_category_proseInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_category_proseInput } from '../languages/languages-create-nested-one-without-item-category-prose.input';
import { item_categoriesCreateNestedOneWithoutItem_category_proseInput } from '../item-categories/item-categories-create-nested-one-without-item-category-prose.input';

@InputType()
export class item_category_proseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutItem_category_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_category_proseInput;

    @Field(() => item_categoriesCreateNestedOneWithoutItem_category_proseInput, {nullable:false})
    item_categories!: item_categoriesCreateNestedOneWithoutItem_category_proseInput;
}

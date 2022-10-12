import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_category_proseInput } from '../languages/languages-create-nested-one-without-item-category-prose.input';

@InputType()
export class item_category_proseCreateWithoutItem_categoriesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutItem_category_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_category_proseInput;
}

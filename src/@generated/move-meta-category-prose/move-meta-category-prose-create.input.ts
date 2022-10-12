import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_meta_category_proseInput } from '../languages/languages-create-nested-one-without-move-meta-category-prose.input';
import { move_meta_categoriesCreateNestedOneWithoutMove_meta_category_proseInput } from '../move-meta-categories/move-meta-categories-create-nested-one-without-move-meta-category-prose.input';

@InputType()
export class move_meta_category_proseCreateInput {

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_meta_category_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_meta_category_proseInput;

    @Field(() => move_meta_categoriesCreateNestedOneWithoutMove_meta_category_proseInput, {nullable:false})
    move_meta_categories!: move_meta_categoriesCreateNestedOneWithoutMove_meta_category_proseInput;
}

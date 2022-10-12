import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_meta_category_proseInput } from '../languages/languages-create-nested-one-without-move-meta-category-prose.input';

@InputType()
export class move_meta_category_proseCreateWithoutMove_meta_categoriesInput {

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_meta_category_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_meta_category_proseInput;
}

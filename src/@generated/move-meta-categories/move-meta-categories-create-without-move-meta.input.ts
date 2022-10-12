import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseCreateNestedManyWithoutMove_meta_categoriesInput } from '../move-meta-category-prose/move-meta-category-prose-create-nested-many-without-move-meta-categories.input';

@InputType()
export class move_meta_categoriesCreateWithoutMove_metaInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_meta_category_proseCreateNestedManyWithoutMove_meta_categoriesInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseCreateNestedManyWithoutMove_meta_categoriesInput;
}

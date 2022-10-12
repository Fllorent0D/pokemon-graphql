import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseWhereUniqueInput } from './move-meta-category-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseUpdateWithoutMove_meta_categoriesInput } from './move-meta-category-prose-update-without-move-meta-categories.input';

@InputType()
export class move_meta_category_proseUpdateWithWhereUniqueWithoutMove_meta_categoriesInput {

    @Field(() => move_meta_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    where!: move_meta_category_proseWhereUniqueInput;

    @Field(() => move_meta_category_proseUpdateWithoutMove_meta_categoriesInput, {nullable:false})
    @Type(() => move_meta_category_proseUpdateWithoutMove_meta_categoriesInput)
    data!: move_meta_category_proseUpdateWithoutMove_meta_categoriesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_categoriesUpdateWithoutMove_meta_category_proseInput } from './move-meta-categories-update-without-move-meta-category-prose.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesCreateWithoutMove_meta_category_proseInput } from './move-meta-categories-create-without-move-meta-category-prose.input';

@InputType()
export class move_meta_categoriesUpsertWithoutMove_meta_category_proseInput {

    @Field(() => move_meta_categoriesUpdateWithoutMove_meta_category_proseInput, {nullable:false})
    @Type(() => move_meta_categoriesUpdateWithoutMove_meta_category_proseInput)
    update!: move_meta_categoriesUpdateWithoutMove_meta_category_proseInput;

    @Field(() => move_meta_categoriesCreateWithoutMove_meta_category_proseInput, {nullable:false})
    @Type(() => move_meta_categoriesCreateWithoutMove_meta_category_proseInput)
    create!: move_meta_categoriesCreateWithoutMove_meta_category_proseInput;
}

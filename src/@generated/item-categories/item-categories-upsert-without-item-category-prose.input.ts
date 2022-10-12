import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesUpdateWithoutItem_category_proseInput } from './item-categories-update-without-item-category-prose.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateWithoutItem_category_proseInput } from './item-categories-create-without-item-category-prose.input';

@InputType()
export class item_categoriesUpsertWithoutItem_category_proseInput {

    @Field(() => item_categoriesUpdateWithoutItem_category_proseInput, {nullable:false})
    @Type(() => item_categoriesUpdateWithoutItem_category_proseInput)
    update!: item_categoriesUpdateWithoutItem_category_proseInput;

    @Field(() => item_categoriesCreateWithoutItem_category_proseInput, {nullable:false})
    @Type(() => item_categoriesCreateWithoutItem_category_proseInput)
    create!: item_categoriesCreateWithoutItem_category_proseInput;
}

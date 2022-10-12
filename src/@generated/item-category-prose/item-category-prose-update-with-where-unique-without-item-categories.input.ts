import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseWhereUniqueInput } from './item-category-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_category_proseUpdateWithoutItem_categoriesInput } from './item-category-prose-update-without-item-categories.input';

@InputType()
export class item_category_proseUpdateWithWhereUniqueWithoutItem_categoriesInput {

    @Field(() => item_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_category_proseWhereUniqueInput)
    where!: item_category_proseWhereUniqueInput;

    @Field(() => item_category_proseUpdateWithoutItem_categoriesInput, {nullable:false})
    @Type(() => item_category_proseUpdateWithoutItem_categoriesInput)
    data!: item_category_proseUpdateWithoutItem_categoriesInput;
}

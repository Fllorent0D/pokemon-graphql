import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateWithoutItem_category_proseInput } from './item-categories-create-without-item-category-prose.input';

@InputType()
export class item_categoriesCreateOrConnectWithoutItem_category_proseInput {

    @Field(() => item_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => item_categoriesWhereUniqueInput)
    where!: item_categoriesWhereUniqueInput;

    @Field(() => item_categoriesCreateWithoutItem_category_proseInput, {nullable:false})
    @Type(() => item_categoriesCreateWithoutItem_category_proseInput)
    create!: item_categoriesCreateWithoutItem_category_proseInput;
}

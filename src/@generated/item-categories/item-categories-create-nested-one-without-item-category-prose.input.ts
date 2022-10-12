import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesCreateWithoutItem_category_proseInput } from './item-categories-create-without-item-category-prose.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateOrConnectWithoutItem_category_proseInput } from './item-categories-create-or-connect-without-item-category-prose.input';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';

@InputType()
export class item_categoriesCreateNestedOneWithoutItem_category_proseInput {

    @Field(() => item_categoriesCreateWithoutItem_category_proseInput, {nullable:true})
    @Type(() => item_categoriesCreateWithoutItem_category_proseInput)
    create?: item_categoriesCreateWithoutItem_category_proseInput;

    @Field(() => item_categoriesCreateOrConnectWithoutItem_category_proseInput, {nullable:true})
    @Type(() => item_categoriesCreateOrConnectWithoutItem_category_proseInput)
    connectOrCreate?: item_categoriesCreateOrConnectWithoutItem_category_proseInput;

    @Field(() => item_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => item_categoriesWhereUniqueInput)
    connect?: item_categoriesWhereUniqueInput;
}

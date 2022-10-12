import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesCreateWithoutItem_category_proseInput } from './item-categories-create-without-item-category-prose.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateOrConnectWithoutItem_category_proseInput } from './item-categories-create-or-connect-without-item-category-prose.input';
import { item_categoriesUpsertWithoutItem_category_proseInput } from './item-categories-upsert-without-item-category-prose.input';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { item_categoriesUpdateWithoutItem_category_proseInput } from './item-categories-update-without-item-category-prose.input';

@InputType()
export class item_categoriesUpdateOneRequiredWithoutItem_category_proseNestedInput {

    @Field(() => item_categoriesCreateWithoutItem_category_proseInput, {nullable:true})
    @Type(() => item_categoriesCreateWithoutItem_category_proseInput)
    create?: item_categoriesCreateWithoutItem_category_proseInput;

    @Field(() => item_categoriesCreateOrConnectWithoutItem_category_proseInput, {nullable:true})
    @Type(() => item_categoriesCreateOrConnectWithoutItem_category_proseInput)
    connectOrCreate?: item_categoriesCreateOrConnectWithoutItem_category_proseInput;

    @Field(() => item_categoriesUpsertWithoutItem_category_proseInput, {nullable:true})
    @Type(() => item_categoriesUpsertWithoutItem_category_proseInput)
    upsert?: item_categoriesUpsertWithoutItem_category_proseInput;

    @Field(() => item_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => item_categoriesWhereUniqueInput)
    connect?: item_categoriesWhereUniqueInput;

    @Field(() => item_categoriesUpdateWithoutItem_category_proseInput, {nullable:true})
    @Type(() => item_categoriesUpdateWithoutItem_category_proseInput)
    update?: item_categoriesUpdateWithoutItem_category_proseInput;
}

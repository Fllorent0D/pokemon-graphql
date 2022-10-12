import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_categoriesCreateWithoutMove_meta_category_proseInput } from './move-meta-categories-create-without-move-meta-category-prose.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesCreateOrConnectWithoutMove_meta_category_proseInput } from './move-meta-categories-create-or-connect-without-move-meta-category-prose.input';
import { move_meta_categoriesUpsertWithoutMove_meta_category_proseInput } from './move-meta-categories-upsert-without-move-meta-category-prose.input';
import { move_meta_categoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';
import { move_meta_categoriesUpdateWithoutMove_meta_category_proseInput } from './move-meta-categories-update-without-move-meta-category-prose.input';

@InputType()
export class move_meta_categoriesUpdateOneRequiredWithoutMove_meta_category_proseNestedInput {

    @Field(() => move_meta_categoriesCreateWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => move_meta_categoriesCreateWithoutMove_meta_category_proseInput)
    create?: move_meta_categoriesCreateWithoutMove_meta_category_proseInput;

    @Field(() => move_meta_categoriesCreateOrConnectWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => move_meta_categoriesCreateOrConnectWithoutMove_meta_category_proseInput)
    connectOrCreate?: move_meta_categoriesCreateOrConnectWithoutMove_meta_category_proseInput;

    @Field(() => move_meta_categoriesUpsertWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => move_meta_categoriesUpsertWithoutMove_meta_category_proseInput)
    upsert?: move_meta_categoriesUpsertWithoutMove_meta_category_proseInput;

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => move_meta_categoriesWhereUniqueInput)
    connect?: move_meta_categoriesWhereUniqueInput;

    @Field(() => move_meta_categoriesUpdateWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => move_meta_categoriesUpdateWithoutMove_meta_category_proseInput)
    update?: move_meta_categoriesUpdateWithoutMove_meta_category_proseInput;
}

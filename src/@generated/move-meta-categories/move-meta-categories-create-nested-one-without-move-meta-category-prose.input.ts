import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_categoriesCreateWithoutMove_meta_category_proseInput } from './move-meta-categories-create-without-move-meta-category-prose.input';
import { Type } from 'class-transformer';
import { move_meta_categoriesCreateOrConnectWithoutMove_meta_category_proseInput } from './move-meta-categories-create-or-connect-without-move-meta-category-prose.input';
import { move_meta_categoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';

@InputType()
export class move_meta_categoriesCreateNestedOneWithoutMove_meta_category_proseInput {

    @Field(() => move_meta_categoriesCreateWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => move_meta_categoriesCreateWithoutMove_meta_category_proseInput)
    create?: move_meta_categoriesCreateWithoutMove_meta_category_proseInput;

    @Field(() => move_meta_categoriesCreateOrConnectWithoutMove_meta_category_proseInput, {nullable:true})
    @Type(() => move_meta_categoriesCreateOrConnectWithoutMove_meta_category_proseInput)
    connectOrCreate?: move_meta_categoriesCreateOrConnectWithoutMove_meta_category_proseInput;

    @Field(() => move_meta_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => move_meta_categoriesWhereUniqueInput)
    connect?: move_meta_categoriesWhereUniqueInput;
}

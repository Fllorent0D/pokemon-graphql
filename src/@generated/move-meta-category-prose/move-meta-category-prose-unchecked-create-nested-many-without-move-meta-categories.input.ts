import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseCreateWithoutMove_meta_categoriesInput } from './move-meta-category-prose-create-without-move-meta-categories.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseCreateOrConnectWithoutMove_meta_categoriesInput } from './move-meta-category-prose-create-or-connect-without-move-meta-categories.input';
import { move_meta_category_proseWhereUniqueInput } from './move-meta-category-prose-where-unique.input';

@InputType()
export class move_meta_category_proseUncheckedCreateNestedManyWithoutMove_meta_categoriesInput {

    @Field(() => [move_meta_category_proseCreateWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_meta_category_proseCreateWithoutMove_meta_categoriesInput)
    create?: Array<move_meta_category_proseCreateWithoutMove_meta_categoriesInput>;

    @Field(() => [move_meta_category_proseCreateOrConnectWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_meta_category_proseCreateOrConnectWithoutMove_meta_categoriesInput)
    connectOrCreate?: Array<move_meta_category_proseCreateOrConnectWithoutMove_meta_categoriesInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    connect?: Array<move_meta_category_proseWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseCreateWithoutMove_meta_categoriesInput } from './move-meta-category-prose-create-without-move-meta-categories.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseCreateOrConnectWithoutMove_meta_categoriesInput } from './move-meta-category-prose-create-or-connect-without-move-meta-categories.input';
import { move_meta_category_proseUpsertWithWhereUniqueWithoutMove_meta_categoriesInput } from './move-meta-category-prose-upsert-with-where-unique-without-move-meta-categories.input';
import { move_meta_category_proseWhereUniqueInput } from './move-meta-category-prose-where-unique.input';
import { move_meta_category_proseUpdateWithWhereUniqueWithoutMove_meta_categoriesInput } from './move-meta-category-prose-update-with-where-unique-without-move-meta-categories.input';
import { move_meta_category_proseUpdateManyWithWhereWithoutMove_meta_categoriesInput } from './move-meta-category-prose-update-many-with-where-without-move-meta-categories.input';
import { move_meta_category_proseScalarWhereInput } from './move-meta-category-prose-scalar-where.input';

@InputType()
export class move_meta_category_proseUpdateManyWithoutMove_meta_categoriesNestedInput {

    @Field(() => [move_meta_category_proseCreateWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_meta_category_proseCreateWithoutMove_meta_categoriesInput)
    create?: Array<move_meta_category_proseCreateWithoutMove_meta_categoriesInput>;

    @Field(() => [move_meta_category_proseCreateOrConnectWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_meta_category_proseCreateOrConnectWithoutMove_meta_categoriesInput)
    connectOrCreate?: Array<move_meta_category_proseCreateOrConnectWithoutMove_meta_categoriesInput>;

    @Field(() => [move_meta_category_proseUpsertWithWhereUniqueWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_meta_category_proseUpsertWithWhereUniqueWithoutMove_meta_categoriesInput)
    upsert?: Array<move_meta_category_proseUpsertWithWhereUniqueWithoutMove_meta_categoriesInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    set?: Array<move_meta_category_proseWhereUniqueInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    disconnect?: Array<move_meta_category_proseWhereUniqueInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    delete?: Array<move_meta_category_proseWhereUniqueInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    connect?: Array<move_meta_category_proseWhereUniqueInput>;

    @Field(() => [move_meta_category_proseUpdateWithWhereUniqueWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_meta_category_proseUpdateWithWhereUniqueWithoutMove_meta_categoriesInput)
    update?: Array<move_meta_category_proseUpdateWithWhereUniqueWithoutMove_meta_categoriesInput>;

    @Field(() => [move_meta_category_proseUpdateManyWithWhereWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_meta_category_proseUpdateManyWithWhereWithoutMove_meta_categoriesInput)
    updateMany?: Array<move_meta_category_proseUpdateManyWithWhereWithoutMove_meta_categoriesInput>;

    @Field(() => [move_meta_category_proseScalarWhereInput], {nullable:true})
    @Type(() => move_meta_category_proseScalarWhereInput)
    deleteMany?: Array<move_meta_category_proseScalarWhereInput>;
}

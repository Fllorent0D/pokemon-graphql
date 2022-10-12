import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseCreateWithoutItem_categoriesInput } from './item-category-prose-create-without-item-categories.input';
import { Type } from 'class-transformer';
import { item_category_proseCreateOrConnectWithoutItem_categoriesInput } from './item-category-prose-create-or-connect-without-item-categories.input';
import { item_category_proseUpsertWithWhereUniqueWithoutItem_categoriesInput } from './item-category-prose-upsert-with-where-unique-without-item-categories.input';
import { item_category_proseWhereUniqueInput } from './item-category-prose-where-unique.input';
import { item_category_proseUpdateWithWhereUniqueWithoutItem_categoriesInput } from './item-category-prose-update-with-where-unique-without-item-categories.input';
import { item_category_proseUpdateManyWithWhereWithoutItem_categoriesInput } from './item-category-prose-update-many-with-where-without-item-categories.input';
import { item_category_proseScalarWhereInput } from './item-category-prose-scalar-where.input';

@InputType()
export class item_category_proseUncheckedUpdateManyWithoutItem_categoriesNestedInput {

    @Field(() => [item_category_proseCreateWithoutItem_categoriesInput], {nullable:true})
    @Type(() => item_category_proseCreateWithoutItem_categoriesInput)
    create?: Array<item_category_proseCreateWithoutItem_categoriesInput>;

    @Field(() => [item_category_proseCreateOrConnectWithoutItem_categoriesInput], {nullable:true})
    @Type(() => item_category_proseCreateOrConnectWithoutItem_categoriesInput)
    connectOrCreate?: Array<item_category_proseCreateOrConnectWithoutItem_categoriesInput>;

    @Field(() => [item_category_proseUpsertWithWhereUniqueWithoutItem_categoriesInput], {nullable:true})
    @Type(() => item_category_proseUpsertWithWhereUniqueWithoutItem_categoriesInput)
    upsert?: Array<item_category_proseUpsertWithWhereUniqueWithoutItem_categoriesInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    set?: Array<item_category_proseWhereUniqueInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    disconnect?: Array<item_category_proseWhereUniqueInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    delete?: Array<item_category_proseWhereUniqueInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    connect?: Array<item_category_proseWhereUniqueInput>;

    @Field(() => [item_category_proseUpdateWithWhereUniqueWithoutItem_categoriesInput], {nullable:true})
    @Type(() => item_category_proseUpdateWithWhereUniqueWithoutItem_categoriesInput)
    update?: Array<item_category_proseUpdateWithWhereUniqueWithoutItem_categoriesInput>;

    @Field(() => [item_category_proseUpdateManyWithWhereWithoutItem_categoriesInput], {nullable:true})
    @Type(() => item_category_proseUpdateManyWithWhereWithoutItem_categoriesInput)
    updateMany?: Array<item_category_proseUpdateManyWithWhereWithoutItem_categoriesInput>;

    @Field(() => [item_category_proseScalarWhereInput], {nullable:true})
    @Type(() => item_category_proseScalarWhereInput)
    deleteMany?: Array<item_category_proseScalarWhereInput>;
}

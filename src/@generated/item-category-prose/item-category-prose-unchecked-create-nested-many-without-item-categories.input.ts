import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseCreateWithoutItem_categoriesInput } from './item-category-prose-create-without-item-categories.input';
import { Type } from 'class-transformer';
import { item_category_proseCreateOrConnectWithoutItem_categoriesInput } from './item-category-prose-create-or-connect-without-item-categories.input';
import { item_category_proseWhereUniqueInput } from './item-category-prose-where-unique.input';

@InputType()
export class item_category_proseUncheckedCreateNestedManyWithoutItem_categoriesInput {

    @Field(() => [item_category_proseCreateWithoutItem_categoriesInput], {nullable:true})
    @Type(() => item_category_proseCreateWithoutItem_categoriesInput)
    create?: Array<item_category_proseCreateWithoutItem_categoriesInput>;

    @Field(() => [item_category_proseCreateOrConnectWithoutItem_categoriesInput], {nullable:true})
    @Type(() => item_category_proseCreateOrConnectWithoutItem_categoriesInput)
    connectOrCreate?: Array<item_category_proseCreateOrConnectWithoutItem_categoriesInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    connect?: Array<item_category_proseWhereUniqueInput>;
}

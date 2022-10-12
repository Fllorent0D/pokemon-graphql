import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_category_proseWhereUniqueInput } from '../item-category-prose/item-category-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_category_proseCreateInput } from '../item-category-prose/item-category-prose-create.input';
import { item_category_proseUpdateInput } from '../item-category-prose/item-category-prose-update.input';

@ArgsType()
export class UpsertOneitemCategoryProseArgs {

    @Field(() => item_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_category_proseWhereUniqueInput)
    where!: item_category_proseWhereUniqueInput;

    @Field(() => item_category_proseCreateInput, {nullable:false})
    @Type(() => item_category_proseCreateInput)
    create!: item_category_proseCreateInput;

    @Field(() => item_category_proseUpdateInput, {nullable:false})
    @Type(() => item_category_proseUpdateInput)
    update!: item_category_proseUpdateInput;
}

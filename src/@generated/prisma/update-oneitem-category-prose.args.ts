import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_category_proseUpdateInput } from '../item-category-prose/item-category-prose-update.input';
import { Type } from 'class-transformer';
import { item_category_proseWhereUniqueInput } from '../item-category-prose/item-category-prose-where-unique.input';

@ArgsType()
export class UpdateOneitemCategoryProseArgs {

    @Field(() => item_category_proseUpdateInput, {nullable:false})
    @Type(() => item_category_proseUpdateInput)
    data!: item_category_proseUpdateInput;

    @Field(() => item_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_category_proseWhereUniqueInput)
    where!: item_category_proseWhereUniqueInput;
}

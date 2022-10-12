import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_category_proseWhereUniqueInput } from '../item-category-prose/item-category-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueitemCategoryProseArgs {

    @Field(() => item_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_category_proseWhereUniqueInput)
    where!: item_category_proseWhereUniqueInput;
}

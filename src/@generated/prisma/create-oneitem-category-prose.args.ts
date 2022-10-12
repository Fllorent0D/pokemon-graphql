import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_category_proseCreateInput } from '../item-category-prose/item-category-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemCategoryProseArgs {

    @Field(() => item_category_proseCreateInput, {nullable:false})
    @Type(() => item_category_proseCreateInput)
    data!: item_category_proseCreateInput;
}

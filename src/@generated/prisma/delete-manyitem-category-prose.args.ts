import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_category_proseWhereInput } from '../item-category-prose/item-category-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemCategoryProseArgs {

    @Field(() => item_category_proseWhereInput, {nullable:true})
    @Type(() => item_category_proseWhereInput)
    where?: item_category_proseWhereInput;
}

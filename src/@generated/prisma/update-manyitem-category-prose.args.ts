import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_category_proseUpdateManyMutationInput } from '../item-category-prose/item-category-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_category_proseWhereInput } from '../item-category-prose/item-category-prose-where.input';

@ArgsType()
export class UpdateManyitemCategoryProseArgs {

    @Field(() => item_category_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => item_category_proseUpdateManyMutationInput)
    data!: item_category_proseUpdateManyMutationInput;

    @Field(() => item_category_proseWhereInput, {nullable:true})
    @Type(() => item_category_proseWhereInput)
    where?: item_category_proseWhereInput;
}

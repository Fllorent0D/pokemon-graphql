import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_categoriesCreateInput } from '../item-categories/item-categories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemCategoriesArgs {

    @Field(() => item_categoriesCreateInput, {nullable:false})
    @Type(() => item_categoriesCreateInput)
    data!: item_categoriesCreateInput;
}

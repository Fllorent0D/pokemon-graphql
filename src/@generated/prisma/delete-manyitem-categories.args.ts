import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_categoriesWhereInput } from '../item-categories/item-categories-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemCategoriesArgs {

    @Field(() => item_categoriesWhereInput, {nullable:true})
    @Type(() => item_categoriesWhereInput)
    where?: item_categoriesWhereInput;
}

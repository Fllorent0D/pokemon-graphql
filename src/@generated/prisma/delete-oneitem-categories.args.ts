import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_categoriesWhereUniqueInput } from '../item-categories/item-categories-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemCategoriesArgs {

    @Field(() => item_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => item_categoriesWhereUniqueInput)
    where!: item_categoriesWhereUniqueInput;
}

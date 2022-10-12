import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_categoriesUpdateInput } from '../item-categories/item-categories-update.input';
import { Type } from 'class-transformer';
import { item_categoriesWhereUniqueInput } from '../item-categories/item-categories-where-unique.input';

@ArgsType()
export class UpdateOneitemCategoriesArgs {

    @Field(() => item_categoriesUpdateInput, {nullable:false})
    @Type(() => item_categoriesUpdateInput)
    data!: item_categoriesUpdateInput;

    @Field(() => item_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => item_categoriesWhereUniqueInput)
    where!: item_categoriesWhereUniqueInput;
}

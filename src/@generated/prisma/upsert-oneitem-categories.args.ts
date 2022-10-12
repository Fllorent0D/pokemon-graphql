import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_categoriesWhereUniqueInput } from '../item-categories/item-categories-where-unique.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateInput } from '../item-categories/item-categories-create.input';
import { item_categoriesUpdateInput } from '../item-categories/item-categories-update.input';

@ArgsType()
export class UpsertOneitemCategoriesArgs {

    @Field(() => item_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => item_categoriesWhereUniqueInput)
    where!: item_categoriesWhereUniqueInput;

    @Field(() => item_categoriesCreateInput, {nullable:false})
    @Type(() => item_categoriesCreateInput)
    create!: item_categoriesCreateInput;

    @Field(() => item_categoriesUpdateInput, {nullable:false})
    @Type(() => item_categoriesUpdateInput)
    update!: item_categoriesUpdateInput;
}

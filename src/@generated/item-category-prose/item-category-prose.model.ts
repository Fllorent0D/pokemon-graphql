import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { item_categories } from '../item-categories/item-categories.model';

@ObjectType()
export class item_category_prose {

    @Field(() => Int, {nullable:false})
    item_category_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => item_categories, {nullable:false})
    item_categories?: item_categories;
}

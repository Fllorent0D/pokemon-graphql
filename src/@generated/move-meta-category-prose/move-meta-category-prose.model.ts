import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { move_meta_categories } from '../move-meta-categories/move-meta-categories.model';

@ObjectType()
export class move_meta_category_prose {

    @Field(() => Int, {nullable:false})
    move_meta_category_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => move_meta_categories, {nullable:false})
    move_meta_categories?: move_meta_categories;
}

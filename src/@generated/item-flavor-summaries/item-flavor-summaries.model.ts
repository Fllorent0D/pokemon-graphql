import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { items } from '../items/items.model';

@ObjectType()
export class item_flavor_summaries {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    flavor_summary!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => items, {nullable:false})
    items?: items;
}

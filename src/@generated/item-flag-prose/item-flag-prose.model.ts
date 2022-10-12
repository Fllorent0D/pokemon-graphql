import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { item_flags } from '../item-flags/item-flags.model';

@ObjectType()
export class item_flag_prose {

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => item_flags, {nullable:false})
    item_flags?: item_flags;
}

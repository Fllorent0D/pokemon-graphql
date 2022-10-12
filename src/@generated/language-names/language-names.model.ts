import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';

@ObjectType()
export class language_names {

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages_language_names_local_language_idTolanguages?: languages;

    @Field(() => languages, {nullable:false})
    languages_language_names_language_idTolanguages?: languages;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { pokemon_forms } from '../pokemon-forms/pokemon-forms.model';

@ObjectType()
export class pokemon_form_names {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    form_name!: string | null;

    @Field(() => String, {nullable:true})
    pokemon_name!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => pokemon_forms, {nullable:false})
    pokemon_forms?: pokemon_forms;
}

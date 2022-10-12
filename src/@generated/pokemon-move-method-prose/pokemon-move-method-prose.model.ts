import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { pokemon_move_methods } from '../pokemon-move-methods/pokemon-move-methods.model';

@ObjectType()
export class pokemon_move_method_prose {

    @Field(() => Int, {nullable:false})
    pokemon_move_method_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => pokemon_move_methods, {nullable:false})
    pokemon_move_methods?: pokemon_move_methods;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { pokedexes } from '../pokedexes/pokedexes.model';

@ObjectType()
export class pokedex_prose {

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => pokedexes, {nullable:false})
    pokedexes?: pokedexes;
}

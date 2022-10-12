import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { pokemon_habitats } from '../pokemon-habitats/pokemon-habitats.model';

@ObjectType()
export class pokemon_habitat_names {

    @Field(() => Int, {nullable:false})
    pokemon_habitat_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => pokemon_habitats, {nullable:false})
    pokemon_habitats?: pokemon_habitats;
}

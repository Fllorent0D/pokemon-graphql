import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';

@ObjectType()
export class pokemon_species_names {

    @Field(() => Int, {nullable:false})
    pokemon_species_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    genus!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => pokemon_species, {nullable:false})
    pokemon_species?: pokemon_species;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokedexes } from '../pokedexes/pokedexes.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';

@ObjectType()
export class pokemon_dex_numbers {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => pokedexes, {nullable:false})
    pokedexes?: pokedexes;

    @Field(() => pokemon_species, {nullable:false})
    pokemon_species?: pokemon_species;
}

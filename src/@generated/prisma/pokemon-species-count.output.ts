import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_speciesCount {

    @Field(() => Int, {nullable:false})
    pokemon!: number;

    @Field(() => Int, {nullable:false})
    pokemon_dex_numbers!: number;

    @Field(() => Int, {nullable:false})
    pokemon_egg_groups!: number;

    @Field(() => Int, {nullable:false})
    pokemon_evolution_pokemon_evolution_trade_species_idTopokemon_species!: number;

    @Field(() => Int, {nullable:false})
    pokemon_evolution_pokemon_evolution_party_species_idTopokemon_species!: number;

    @Field(() => Int, {nullable:false})
    pokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_species!: number;

    @Field(() => Int, {nullable:false})
    other_pokemon_species!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_flavor_summaries!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_prose!: number;
}

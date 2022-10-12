import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsCreateNestedOneWithoutPokemon_game_indicesInput } from '../generations/generations-create-nested-one-without-pokemon-game-indices.input';
import { pokemonCreateNestedOneWithoutPokemon_game_indicesInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-game-indices.input';

@InputType()
export class pokemon_game_indicesCreateInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => generationsCreateNestedOneWithoutPokemon_game_indicesInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutPokemon_game_indicesInput;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_game_indicesInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_game_indicesInput;
}

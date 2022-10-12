import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonCreateNestedOneWithoutPokemon_game_indicesInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-game-indices.input';

@InputType()
export class pokemon_game_indicesCreateWithoutGenerationsInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_game_indicesInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_game_indicesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsCreateNestedOneWithoutPokemon_game_indicesInput } from '../generations/generations-create-nested-one-without-pokemon-game-indices.input';

@InputType()
export class pokemon_game_indicesCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => generationsCreateNestedOneWithoutPokemon_game_indicesInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutPokemon_game_indicesInput;
}

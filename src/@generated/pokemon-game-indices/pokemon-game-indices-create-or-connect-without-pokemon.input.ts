import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesCreateWithoutPokemonInput } from './pokemon-game-indices-create-without-pokemon.input';

@InputType()
export class pokemon_game_indicesCreateOrConnectWithoutPokemonInput {

    @Field(() => pokemon_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    where!: pokemon_game_indicesWhereUniqueInput;

    @Field(() => pokemon_game_indicesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_game_indicesCreateWithoutPokemonInput)
    create!: pokemon_game_indicesCreateWithoutPokemonInput;
}

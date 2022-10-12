import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonUpdateWithoutPokemon_game_indicesInput } from './pokemon-update-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_game_indicesInput } from './pokemon-create-without-pokemon-game-indices.input';

@InputType()
export class pokemonUpsertWithoutPokemon_game_indicesInput {

    @Field(() => pokemonUpdateWithoutPokemon_game_indicesInput, {nullable:false})
    @Type(() => pokemonUpdateWithoutPokemon_game_indicesInput)
    update!: pokemonUpdateWithoutPokemon_game_indicesInput;

    @Field(() => pokemonCreateWithoutPokemon_game_indicesInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_game_indicesInput)
    create!: pokemonCreateWithoutPokemon_game_indicesInput;
}

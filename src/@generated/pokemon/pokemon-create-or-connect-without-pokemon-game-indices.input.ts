import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_game_indicesInput } from './pokemon-create-without-pokemon-game-indices.input';

@InputType()
export class pokemonCreateOrConnectWithoutPokemon_game_indicesInput {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonCreateWithoutPokemon_game_indicesInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_game_indicesInput)
    create!: pokemonCreateWithoutPokemon_game_indicesInput;
}

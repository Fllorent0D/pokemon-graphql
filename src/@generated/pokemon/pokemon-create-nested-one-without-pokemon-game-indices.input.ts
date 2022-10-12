import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_game_indicesInput } from './pokemon-create-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_game_indicesInput } from './pokemon-create-or-connect-without-pokemon-game-indices.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class pokemonCreateNestedOneWithoutPokemon_game_indicesInput {

    @Field(() => pokemonCreateWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_game_indicesInput)
    create?: pokemonCreateWithoutPokemon_game_indicesInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_game_indicesInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_game_indicesInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;
}

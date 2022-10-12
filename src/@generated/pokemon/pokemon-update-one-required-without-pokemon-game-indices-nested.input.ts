import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_game_indicesInput } from './pokemon-create-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_game_indicesInput } from './pokemon-create-or-connect-without-pokemon-game-indices.input';
import { pokemonUpsertWithoutPokemon_game_indicesInput } from './pokemon-upsert-without-pokemon-game-indices.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { pokemonUpdateWithoutPokemon_game_indicesInput } from './pokemon-update-without-pokemon-game-indices.input';

@InputType()
export class pokemonUpdateOneRequiredWithoutPokemon_game_indicesNestedInput {

    @Field(() => pokemonCreateWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_game_indicesInput)
    create?: pokemonCreateWithoutPokemon_game_indicesInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_game_indicesInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_game_indicesInput;

    @Field(() => pokemonUpsertWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => pokemonUpsertWithoutPokemon_game_indicesInput)
    upsert?: pokemonUpsertWithoutPokemon_game_indicesInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;

    @Field(() => pokemonUpdateWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => pokemonUpdateWithoutPokemon_game_indicesInput)
    update?: pokemonUpdateWithoutPokemon_game_indicesInput;
}

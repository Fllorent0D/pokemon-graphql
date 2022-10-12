import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesCreateWithoutPokemonInput } from './pokemon-game-indices-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesCreateOrConnectWithoutPokemonInput } from './pokemon-game-indices-create-or-connect-without-pokemon.input';
import { pokemon_game_indicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';

@InputType()
export class pokemon_game_indicesCreateNestedManyWithoutPokemonInput {

    @Field(() => [pokemon_game_indicesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_game_indicesCreateWithoutPokemonInput)
    create?: Array<pokemon_game_indicesCreateWithoutPokemonInput>;

    @Field(() => [pokemon_game_indicesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_game_indicesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_game_indicesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    connect?: Array<pokemon_game_indicesWhereUniqueInput>;
}

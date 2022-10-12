import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesCreateWithoutPokemonInput } from './pokemon-game-indices-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesCreateOrConnectWithoutPokemonInput } from './pokemon-game-indices-create-or-connect-without-pokemon.input';
import { pokemon_game_indicesUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-game-indices-upsert-with-where-unique-without-pokemon.input';
import { pokemon_game_indicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { pokemon_game_indicesUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-game-indices-update-with-where-unique-without-pokemon.input';
import { pokemon_game_indicesUpdateManyWithWhereWithoutPokemonInput } from './pokemon-game-indices-update-many-with-where-without-pokemon.input';
import { pokemon_game_indicesScalarWhereInput } from './pokemon-game-indices-scalar-where.input';

@InputType()
export class pokemon_game_indicesUpdateManyWithoutPokemonNestedInput {

    @Field(() => [pokemon_game_indicesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_game_indicesCreateWithoutPokemonInput)
    create?: Array<pokemon_game_indicesCreateWithoutPokemonInput>;

    @Field(() => [pokemon_game_indicesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_game_indicesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_game_indicesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_game_indicesUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_game_indicesUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<pokemon_game_indicesUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    set?: Array<pokemon_game_indicesWhereUniqueInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    disconnect?: Array<pokemon_game_indicesWhereUniqueInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    delete?: Array<pokemon_game_indicesWhereUniqueInput>;

    @Field(() => [pokemon_game_indicesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_game_indicesWhereUniqueInput)
    connect?: Array<pokemon_game_indicesWhereUniqueInput>;

    @Field(() => [pokemon_game_indicesUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_game_indicesUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<pokemon_game_indicesUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [pokemon_game_indicesUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_game_indicesUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<pokemon_game_indicesUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [pokemon_game_indicesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_game_indicesScalarWhereInput)
    deleteMany?: Array<pokemon_game_indicesScalarWhereInput>;
}

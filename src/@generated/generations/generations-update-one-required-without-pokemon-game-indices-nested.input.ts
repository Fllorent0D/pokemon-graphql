import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutPokemon_game_indicesInput } from './generations-create-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutPokemon_game_indicesInput } from './generations-create-or-connect-without-pokemon-game-indices.input';
import { generationsUpsertWithoutPokemon_game_indicesInput } from './generations-upsert-without-pokemon-game-indices.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutPokemon_game_indicesInput } from './generations-update-without-pokemon-game-indices.input';

@InputType()
export class generationsUpdateOneRequiredWithoutPokemon_game_indicesNestedInput {

    @Field(() => generationsCreateWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateWithoutPokemon_game_indicesInput)
    create?: generationsCreateWithoutPokemon_game_indicesInput;

    @Field(() => generationsCreateOrConnectWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutPokemon_game_indicesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutPokemon_game_indicesInput;

    @Field(() => generationsUpsertWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => generationsUpsertWithoutPokemon_game_indicesInput)
    upsert?: generationsUpsertWithoutPokemon_game_indicesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => generationsUpdateWithoutPokemon_game_indicesInput)
    update?: generationsUpdateWithoutPokemon_game_indicesInput;
}

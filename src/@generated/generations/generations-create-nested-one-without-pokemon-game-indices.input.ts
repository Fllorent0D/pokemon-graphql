import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutPokemon_game_indicesInput } from './generations-create-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutPokemon_game_indicesInput } from './generations-create-or-connect-without-pokemon-game-indices.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedOneWithoutPokemon_game_indicesInput {

    @Field(() => generationsCreateWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateWithoutPokemon_game_indicesInput)
    create?: generationsCreateWithoutPokemon_game_indicesInput;

    @Field(() => generationsCreateOrConnectWithoutPokemon_game_indicesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutPokemon_game_indicesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutPokemon_game_indicesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;
}

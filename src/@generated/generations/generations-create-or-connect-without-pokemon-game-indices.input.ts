import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutPokemon_game_indicesInput } from './generations-create-without-pokemon-game-indices.input';

@InputType()
export class generationsCreateOrConnectWithoutPokemon_game_indicesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutPokemon_game_indicesInput, {nullable:false})
    @Type(() => generationsCreateWithoutPokemon_game_indicesInput)
    create!: generationsCreateWithoutPokemon_game_indicesInput;
}

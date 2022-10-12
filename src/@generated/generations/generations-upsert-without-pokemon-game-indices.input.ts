import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutPokemon_game_indicesInput } from './generations-update-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutPokemon_game_indicesInput } from './generations-create-without-pokemon-game-indices.input';

@InputType()
export class generationsUpsertWithoutPokemon_game_indicesInput {

    @Field(() => generationsUpdateWithoutPokemon_game_indicesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutPokemon_game_indicesInput)
    update!: generationsUpdateWithoutPokemon_game_indicesInput;

    @Field(() => generationsCreateWithoutPokemon_game_indicesInput, {nullable:false})
    @Type(() => generationsCreateWithoutPokemon_game_indicesInput)
    create!: generationsCreateWithoutPokemon_game_indicesInput;
}

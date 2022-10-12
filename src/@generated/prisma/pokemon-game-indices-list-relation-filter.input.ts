import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesWhereInput } from '../pokemon-game-indices/pokemon-game-indices-where.input';

@InputType()
export class Pokemon_game_indicesListRelationFilter {

    @Field(() => pokemon_game_indicesWhereInput, {nullable:true})
    every?: pokemon_game_indicesWhereInput;

    @Field(() => pokemon_game_indicesWhereInput, {nullable:true})
    some?: pokemon_game_indicesWhereInput;

    @Field(() => pokemon_game_indicesWhereInput, {nullable:true})
    none?: pokemon_game_indicesWhereInput;
}

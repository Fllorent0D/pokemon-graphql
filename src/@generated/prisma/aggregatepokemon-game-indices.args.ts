import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_game_indicesWhereInput } from '../pokemon-game-indices/pokemon-game-indices-where.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesOrderByWithRelationInput } from '../pokemon-game-indices/pokemon-game-indices-order-by-with-relation.input';
import { pokemon_game_indicesWhereUniqueInput } from '../pokemon-game-indices/pokemon-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokemonGameIndicesArgs {

    @Field(() => pokemon_game_indicesWhereInput, {nullable:true})
    @Type(() => pokemon_game_indicesWhereInput)
    where?: pokemon_game_indicesWhereInput;

    @Field(() => [pokemon_game_indicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_game_indicesOrderByWithRelationInput>;

    @Field(() => pokemon_game_indicesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_game_indicesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

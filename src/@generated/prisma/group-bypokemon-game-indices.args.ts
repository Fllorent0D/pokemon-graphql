import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_game_indicesWhereInput } from '../pokemon-game-indices/pokemon-game-indices-where.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesOrderByWithAggregationInput } from '../pokemon-game-indices/pokemon-game-indices-order-by-with-aggregation.input';
import { Pokemon_game_indicesScalarFieldEnum } from './pokemon-game-indices-scalar-field.enum';
import { pokemon_game_indicesScalarWhereWithAggregatesInput } from '../pokemon-game-indices/pokemon-game-indices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonGameIndicesArgs {

    @Field(() => pokemon_game_indicesWhereInput, {nullable:true})
    @Type(() => pokemon_game_indicesWhereInput)
    where?: pokemon_game_indicesWhereInput;

    @Field(() => [pokemon_game_indicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_game_indicesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_game_indicesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_game_indicesScalarFieldEnum>;

    @Field(() => pokemon_game_indicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_game_indicesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

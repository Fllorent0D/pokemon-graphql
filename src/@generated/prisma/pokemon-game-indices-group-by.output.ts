import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_game_indicesCountAggregate } from './pokemon-game-indices-count-aggregate.output';
import { Pokemon_game_indicesAvgAggregate } from './pokemon-game-indices-avg-aggregate.output';
import { Pokemon_game_indicesSumAggregate } from './pokemon-game-indices-sum-aggregate.output';
import { Pokemon_game_indicesMinAggregate } from './pokemon-game-indices-min-aggregate.output';
import { Pokemon_game_indicesMaxAggregate } from './pokemon-game-indices-max-aggregate.output';

@ObjectType()
export class Pokemon_game_indicesGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Pokemon_game_indicesCountAggregate, {nullable:true})
    _count?: Pokemon_game_indicesCountAggregate;

    @Field(() => Pokemon_game_indicesAvgAggregate, {nullable:true})
    _avg?: Pokemon_game_indicesAvgAggregate;

    @Field(() => Pokemon_game_indicesSumAggregate, {nullable:true})
    _sum?: Pokemon_game_indicesSumAggregate;

    @Field(() => Pokemon_game_indicesMinAggregate, {nullable:true})
    _min?: Pokemon_game_indicesMinAggregate;

    @Field(() => Pokemon_game_indicesMaxAggregate, {nullable:true})
    _max?: Pokemon_game_indicesMaxAggregate;
}

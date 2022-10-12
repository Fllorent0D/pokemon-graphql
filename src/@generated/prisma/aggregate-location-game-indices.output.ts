import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Location_game_indicesCountAggregate } from './location-game-indices-count-aggregate.output';
import { Location_game_indicesAvgAggregate } from './location-game-indices-avg-aggregate.output';
import { Location_game_indicesSumAggregate } from './location-game-indices-sum-aggregate.output';
import { Location_game_indicesMinAggregate } from './location-game-indices-min-aggregate.output';
import { Location_game_indicesMaxAggregate } from './location-game-indices-max-aggregate.output';

@ObjectType()
export class AggregateLocation_game_indices {

    @Field(() => Location_game_indicesCountAggregate, {nullable:true})
    _count?: Location_game_indicesCountAggregate;

    @Field(() => Location_game_indicesAvgAggregate, {nullable:true})
    _avg?: Location_game_indicesAvgAggregate;

    @Field(() => Location_game_indicesSumAggregate, {nullable:true})
    _sum?: Location_game_indicesSumAggregate;

    @Field(() => Location_game_indicesMinAggregate, {nullable:true})
    _min?: Location_game_indicesMinAggregate;

    @Field(() => Location_game_indicesMaxAggregate, {nullable:true})
    _max?: Location_game_indicesMaxAggregate;
}

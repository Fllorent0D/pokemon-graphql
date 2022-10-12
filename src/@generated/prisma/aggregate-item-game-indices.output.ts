import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Item_game_indicesCountAggregate } from './item-game-indices-count-aggregate.output';
import { Item_game_indicesAvgAggregate } from './item-game-indices-avg-aggregate.output';
import { Item_game_indicesSumAggregate } from './item-game-indices-sum-aggregate.output';
import { Item_game_indicesMinAggregate } from './item-game-indices-min-aggregate.output';
import { Item_game_indicesMaxAggregate } from './item-game-indices-max-aggregate.output';

@ObjectType()
export class AggregateItem_game_indices {

    @Field(() => Item_game_indicesCountAggregate, {nullable:true})
    _count?: Item_game_indicesCountAggregate;

    @Field(() => Item_game_indicesAvgAggregate, {nullable:true})
    _avg?: Item_game_indicesAvgAggregate;

    @Field(() => Item_game_indicesSumAggregate, {nullable:true})
    _sum?: Item_game_indicesSumAggregate;

    @Field(() => Item_game_indicesMinAggregate, {nullable:true})
    _min?: Item_game_indicesMinAggregate;

    @Field(() => Item_game_indicesMaxAggregate, {nullable:true})
    _max?: Item_game_indicesMaxAggregate;
}

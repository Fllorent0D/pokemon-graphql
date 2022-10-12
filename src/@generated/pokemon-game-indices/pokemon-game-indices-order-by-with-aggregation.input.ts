import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_game_indicesCountOrderByAggregateInput } from './pokemon-game-indices-count-order-by-aggregate.input';
import { pokemon_game_indicesAvgOrderByAggregateInput } from './pokemon-game-indices-avg-order-by-aggregate.input';
import { pokemon_game_indicesMaxOrderByAggregateInput } from './pokemon-game-indices-max-order-by-aggregate.input';
import { pokemon_game_indicesMinOrderByAggregateInput } from './pokemon-game-indices-min-order-by-aggregate.input';
import { pokemon_game_indicesSumOrderByAggregateInput } from './pokemon-game-indices-sum-order-by-aggregate.input';

@InputType()
export class pokemon_game_indicesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_index?: keyof typeof SortOrder;

    @Field(() => pokemon_game_indicesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_game_indicesCountOrderByAggregateInput;

    @Field(() => pokemon_game_indicesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_game_indicesAvgOrderByAggregateInput;

    @Field(() => pokemon_game_indicesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_game_indicesMaxOrderByAggregateInput;

    @Field(() => pokemon_game_indicesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_game_indicesMinOrderByAggregateInput;

    @Field(() => pokemon_game_indicesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_game_indicesSumOrderByAggregateInput;
}

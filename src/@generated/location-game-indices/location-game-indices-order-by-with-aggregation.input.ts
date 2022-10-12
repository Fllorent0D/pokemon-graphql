import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { location_game_indicesCountOrderByAggregateInput } from './location-game-indices-count-order-by-aggregate.input';
import { location_game_indicesAvgOrderByAggregateInput } from './location-game-indices-avg-order-by-aggregate.input';
import { location_game_indicesMaxOrderByAggregateInput } from './location-game-indices-max-order-by-aggregate.input';
import { location_game_indicesMinOrderByAggregateInput } from './location-game-indices-min-order-by-aggregate.input';
import { location_game_indicesSumOrderByAggregateInput } from './location-game-indices-sum-order-by-aggregate.input';

@InputType()
export class location_game_indicesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    location_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_index?: keyof typeof SortOrder;

    @Field(() => location_game_indicesCountOrderByAggregateInput, {nullable:true})
    _count?: location_game_indicesCountOrderByAggregateInput;

    @Field(() => location_game_indicesAvgOrderByAggregateInput, {nullable:true})
    _avg?: location_game_indicesAvgOrderByAggregateInput;

    @Field(() => location_game_indicesMaxOrderByAggregateInput, {nullable:true})
    _max?: location_game_indicesMaxOrderByAggregateInput;

    @Field(() => location_game_indicesMinOrderByAggregateInput, {nullable:true})
    _min?: location_game_indicesMinOrderByAggregateInput;

    @Field(() => location_game_indicesSumOrderByAggregateInput, {nullable:true})
    _sum?: location_game_indicesSumOrderByAggregateInput;
}

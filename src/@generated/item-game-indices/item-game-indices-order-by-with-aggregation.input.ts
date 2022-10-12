import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_game_indicesCountOrderByAggregateInput } from './item-game-indices-count-order-by-aggregate.input';
import { item_game_indicesAvgOrderByAggregateInput } from './item-game-indices-avg-order-by-aggregate.input';
import { item_game_indicesMaxOrderByAggregateInput } from './item-game-indices-max-order-by-aggregate.input';
import { item_game_indicesMinOrderByAggregateInput } from './item-game-indices-min-order-by-aggregate.input';
import { item_game_indicesSumOrderByAggregateInput } from './item-game-indices-sum-order-by-aggregate.input';

@InputType()
export class item_game_indicesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_index?: keyof typeof SortOrder;

    @Field(() => item_game_indicesCountOrderByAggregateInput, {nullable:true})
    _count?: item_game_indicesCountOrderByAggregateInput;

    @Field(() => item_game_indicesAvgOrderByAggregateInput, {nullable:true})
    _avg?: item_game_indicesAvgOrderByAggregateInput;

    @Field(() => item_game_indicesMaxOrderByAggregateInput, {nullable:true})
    _max?: item_game_indicesMaxOrderByAggregateInput;

    @Field(() => item_game_indicesMinOrderByAggregateInput, {nullable:true})
    _min?: item_game_indicesMinOrderByAggregateInput;

    @Field(() => item_game_indicesSumOrderByAggregateInput, {nullable:true})
    _sum?: item_game_indicesSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_move_methodsCountOrderByAggregateInput } from './pokemon-move-methods-count-order-by-aggregate.input';
import { pokemon_move_methodsAvgOrderByAggregateInput } from './pokemon-move-methods-avg-order-by-aggregate.input';
import { pokemon_move_methodsMaxOrderByAggregateInput } from './pokemon-move-methods-max-order-by-aggregate.input';
import { pokemon_move_methodsMinOrderByAggregateInput } from './pokemon-move-methods-min-order-by-aggregate.input';
import { pokemon_move_methodsSumOrderByAggregateInput } from './pokemon-move-methods-sum-order-by-aggregate.input';

@InputType()
export class pokemon_move_methodsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokemon_move_methodsCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_move_methodsCountOrderByAggregateInput;

    @Field(() => pokemon_move_methodsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_move_methodsAvgOrderByAggregateInput;

    @Field(() => pokemon_move_methodsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_move_methodsMaxOrderByAggregateInput;

    @Field(() => pokemon_move_methodsMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_move_methodsMinOrderByAggregateInput;

    @Field(() => pokemon_move_methodsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_move_methodsSumOrderByAggregateInput;
}

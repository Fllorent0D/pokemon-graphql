import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_move_method_proseCountOrderByAggregateInput } from './pokemon-move-method-prose-count-order-by-aggregate.input';
import { pokemon_move_method_proseAvgOrderByAggregateInput } from './pokemon-move-method-prose-avg-order-by-aggregate.input';
import { pokemon_move_method_proseMaxOrderByAggregateInput } from './pokemon-move-method-prose-max-order-by-aggregate.input';
import { pokemon_move_method_proseMinOrderByAggregateInput } from './pokemon-move-method-prose-min-order-by-aggregate.input';
import { pokemon_move_method_proseSumOrderByAggregateInput } from './pokemon-move-method-prose-sum-order-by-aggregate.input';

@InputType()
export class pokemon_move_method_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_move_method_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => pokemon_move_method_proseCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_move_method_proseCountOrderByAggregateInput;

    @Field(() => pokemon_move_method_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_move_method_proseAvgOrderByAggregateInput;

    @Field(() => pokemon_move_method_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_move_method_proseMaxOrderByAggregateInput;

    @Field(() => pokemon_move_method_proseMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_move_method_proseMinOrderByAggregateInput;

    @Field(() => pokemon_move_method_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_move_method_proseSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_shape_proseCountOrderByAggregateInput } from './pokemon-shape-prose-count-order-by-aggregate.input';
import { pokemon_shape_proseAvgOrderByAggregateInput } from './pokemon-shape-prose-avg-order-by-aggregate.input';
import { pokemon_shape_proseMaxOrderByAggregateInput } from './pokemon-shape-prose-max-order-by-aggregate.input';
import { pokemon_shape_proseMinOrderByAggregateInput } from './pokemon-shape-prose-min-order-by-aggregate.input';
import { pokemon_shape_proseSumOrderByAggregateInput } from './pokemon-shape-prose-sum-order-by-aggregate.input';

@InputType()
export class pokemon_shape_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_shape_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    awesome_name?: keyof typeof SortOrder;

    @Field(() => pokemon_shape_proseCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_shape_proseCountOrderByAggregateInput;

    @Field(() => pokemon_shape_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_shape_proseAvgOrderByAggregateInput;

    @Field(() => pokemon_shape_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_shape_proseMaxOrderByAggregateInput;

    @Field(() => pokemon_shape_proseMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_shape_proseMinOrderByAggregateInput;

    @Field(() => pokemon_shape_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_shape_proseSumOrderByAggregateInput;
}

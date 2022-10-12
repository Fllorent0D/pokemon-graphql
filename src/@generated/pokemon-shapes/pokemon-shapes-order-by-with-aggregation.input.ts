import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_shapesCountOrderByAggregateInput } from './pokemon-shapes-count-order-by-aggregate.input';
import { pokemon_shapesAvgOrderByAggregateInput } from './pokemon-shapes-avg-order-by-aggregate.input';
import { pokemon_shapesMaxOrderByAggregateInput } from './pokemon-shapes-max-order-by-aggregate.input';
import { pokemon_shapesMinOrderByAggregateInput } from './pokemon-shapes-min-order-by-aggregate.input';
import { pokemon_shapesSumOrderByAggregateInput } from './pokemon-shapes-sum-order-by-aggregate.input';

@InputType()
export class pokemon_shapesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokemon_shapesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_shapesCountOrderByAggregateInput;

    @Field(() => pokemon_shapesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_shapesAvgOrderByAggregateInput;

    @Field(() => pokemon_shapesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_shapesMaxOrderByAggregateInput;

    @Field(() => pokemon_shapesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_shapesMinOrderByAggregateInput;

    @Field(() => pokemon_shapesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_shapesSumOrderByAggregateInput;
}

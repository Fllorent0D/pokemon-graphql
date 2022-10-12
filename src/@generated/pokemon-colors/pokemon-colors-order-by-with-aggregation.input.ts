import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_colorsCountOrderByAggregateInput } from './pokemon-colors-count-order-by-aggregate.input';
import { pokemon_colorsAvgOrderByAggregateInput } from './pokemon-colors-avg-order-by-aggregate.input';
import { pokemon_colorsMaxOrderByAggregateInput } from './pokemon-colors-max-order-by-aggregate.input';
import { pokemon_colorsMinOrderByAggregateInput } from './pokemon-colors-min-order-by-aggregate.input';
import { pokemon_colorsSumOrderByAggregateInput } from './pokemon-colors-sum-order-by-aggregate.input';

@InputType()
export class pokemon_colorsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokemon_colorsCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_colorsCountOrderByAggregateInput;

    @Field(() => pokemon_colorsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_colorsAvgOrderByAggregateInput;

    @Field(() => pokemon_colorsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_colorsMaxOrderByAggregateInput;

    @Field(() => pokemon_colorsMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_colorsMinOrderByAggregateInput;

    @Field(() => pokemon_colorsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_colorsSumOrderByAggregateInput;
}

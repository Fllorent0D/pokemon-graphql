import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_habitatsCountOrderByAggregateInput } from './pokemon-habitats-count-order-by-aggregate.input';
import { pokemon_habitatsAvgOrderByAggregateInput } from './pokemon-habitats-avg-order-by-aggregate.input';
import { pokemon_habitatsMaxOrderByAggregateInput } from './pokemon-habitats-max-order-by-aggregate.input';
import { pokemon_habitatsMinOrderByAggregateInput } from './pokemon-habitats-min-order-by-aggregate.input';
import { pokemon_habitatsSumOrderByAggregateInput } from './pokemon-habitats-sum-order-by-aggregate.input';

@InputType()
export class pokemon_habitatsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokemon_habitatsCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_habitatsCountOrderByAggregateInput;

    @Field(() => pokemon_habitatsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_habitatsAvgOrderByAggregateInput;

    @Field(() => pokemon_habitatsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_habitatsMaxOrderByAggregateInput;

    @Field(() => pokemon_habitatsMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_habitatsMinOrderByAggregateInput;

    @Field(() => pokemon_habitatsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_habitatsSumOrderByAggregateInput;
}

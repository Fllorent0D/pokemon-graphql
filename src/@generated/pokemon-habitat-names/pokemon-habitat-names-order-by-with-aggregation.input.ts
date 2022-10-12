import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_habitat_namesCountOrderByAggregateInput } from './pokemon-habitat-names-count-order-by-aggregate.input';
import { pokemon_habitat_namesAvgOrderByAggregateInput } from './pokemon-habitat-names-avg-order-by-aggregate.input';
import { pokemon_habitat_namesMaxOrderByAggregateInput } from './pokemon-habitat-names-max-order-by-aggregate.input';
import { pokemon_habitat_namesMinOrderByAggregateInput } from './pokemon-habitat-names-min-order-by-aggregate.input';
import { pokemon_habitat_namesSumOrderByAggregateInput } from './pokemon-habitat-names-sum-order-by-aggregate.input';

@InputType()
export class pokemon_habitat_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_habitat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => pokemon_habitat_namesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_habitat_namesCountOrderByAggregateInput;

    @Field(() => pokemon_habitat_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_habitat_namesAvgOrderByAggregateInput;

    @Field(() => pokemon_habitat_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_habitat_namesMaxOrderByAggregateInput;

    @Field(() => pokemon_habitat_namesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_habitat_namesMinOrderByAggregateInput;

    @Field(() => pokemon_habitat_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_habitat_namesSumOrderByAggregateInput;
}

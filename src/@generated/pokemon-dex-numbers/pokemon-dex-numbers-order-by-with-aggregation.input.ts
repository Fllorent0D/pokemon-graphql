import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_dex_numbersCountOrderByAggregateInput } from './pokemon-dex-numbers-count-order-by-aggregate.input';
import { pokemon_dex_numbersAvgOrderByAggregateInput } from './pokemon-dex-numbers-avg-order-by-aggregate.input';
import { pokemon_dex_numbersMaxOrderByAggregateInput } from './pokemon-dex-numbers-max-order-by-aggregate.input';
import { pokemon_dex_numbersMinOrderByAggregateInput } from './pokemon-dex-numbers-min-order-by-aggregate.input';
import { pokemon_dex_numbersSumOrderByAggregateInput } from './pokemon-dex-numbers-sum-order-by-aggregate.input';

@InputType()
export class pokemon_dex_numbersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokedex_number?: keyof typeof SortOrder;

    @Field(() => pokemon_dex_numbersCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_dex_numbersCountOrderByAggregateInput;

    @Field(() => pokemon_dex_numbersAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_dex_numbersAvgOrderByAggregateInput;

    @Field(() => pokemon_dex_numbersMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_dex_numbersMaxOrderByAggregateInput;

    @Field(() => pokemon_dex_numbersMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_dex_numbersMinOrderByAggregateInput;

    @Field(() => pokemon_dex_numbersSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_dex_numbersSumOrderByAggregateInput;
}

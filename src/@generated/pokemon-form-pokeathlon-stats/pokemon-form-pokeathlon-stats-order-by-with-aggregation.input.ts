import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_form_pokeathlon_statsCountOrderByAggregateInput } from './pokemon-form-pokeathlon-stats-count-order-by-aggregate.input';
import { pokemon_form_pokeathlon_statsAvgOrderByAggregateInput } from './pokemon-form-pokeathlon-stats-avg-order-by-aggregate.input';
import { pokemon_form_pokeathlon_statsMaxOrderByAggregateInput } from './pokemon-form-pokeathlon-stats-max-order-by-aggregate.input';
import { pokemon_form_pokeathlon_statsMinOrderByAggregateInput } from './pokemon-form-pokeathlon-stats-min-order-by-aggregate.input';
import { pokemon_form_pokeathlon_statsSumOrderByAggregateInput } from './pokemon-form-pokeathlon-stats-sum-order-by-aggregate.input';

@InputType()
export class pokemon_form_pokeathlon_statsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokeathlon_stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimum_stat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_stat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maximum_stat?: keyof typeof SortOrder;

    @Field(() => pokemon_form_pokeathlon_statsCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_form_pokeathlon_statsCountOrderByAggregateInput;

    @Field(() => pokemon_form_pokeathlon_statsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_form_pokeathlon_statsAvgOrderByAggregateInput;

    @Field(() => pokemon_form_pokeathlon_statsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_form_pokeathlon_statsMaxOrderByAggregateInput;

    @Field(() => pokemon_form_pokeathlon_statsMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_form_pokeathlon_statsMinOrderByAggregateInput;

    @Field(() => pokemon_form_pokeathlon_statsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_form_pokeathlon_statsSumOrderByAggregateInput;
}

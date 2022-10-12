import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_species_flavor_summariesCountOrderByAggregateInput } from './pokemon-species-flavor-summaries-count-order-by-aggregate.input';
import { pokemon_species_flavor_summariesAvgOrderByAggregateInput } from './pokemon-species-flavor-summaries-avg-order-by-aggregate.input';
import { pokemon_species_flavor_summariesMaxOrderByAggregateInput } from './pokemon-species-flavor-summaries-max-order-by-aggregate.input';
import { pokemon_species_flavor_summariesMinOrderByAggregateInput } from './pokemon-species-flavor-summaries-min-order-by-aggregate.input';
import { pokemon_species_flavor_summariesSumOrderByAggregateInput } from './pokemon-species-flavor-summaries-sum-order-by-aggregate.input';

@InputType()
export class pokemon_species_flavor_summariesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_summary?: keyof typeof SortOrder;

    @Field(() => pokemon_species_flavor_summariesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_species_flavor_summariesCountOrderByAggregateInput;

    @Field(() => pokemon_species_flavor_summariesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_species_flavor_summariesAvgOrderByAggregateInput;

    @Field(() => pokemon_species_flavor_summariesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_species_flavor_summariesMaxOrderByAggregateInput;

    @Field(() => pokemon_species_flavor_summariesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_species_flavor_summariesMinOrderByAggregateInput;

    @Field(() => pokemon_species_flavor_summariesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_species_flavor_summariesSumOrderByAggregateInput;
}

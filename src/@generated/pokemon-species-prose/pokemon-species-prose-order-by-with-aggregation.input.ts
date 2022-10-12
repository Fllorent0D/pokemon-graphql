import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_species_proseCountOrderByAggregateInput } from './pokemon-species-prose-count-order-by-aggregate.input';
import { pokemon_species_proseAvgOrderByAggregateInput } from './pokemon-species-prose-avg-order-by-aggregate.input';
import { pokemon_species_proseMaxOrderByAggregateInput } from './pokemon-species-prose-max-order-by-aggregate.input';
import { pokemon_species_proseMinOrderByAggregateInput } from './pokemon-species-prose-min-order-by-aggregate.input';
import { pokemon_species_proseSumOrderByAggregateInput } from './pokemon-species-prose-sum-order-by-aggregate.input';

@InputType()
export class pokemon_species_proseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_description?: keyof typeof SortOrder;

    @Field(() => pokemon_species_proseCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_species_proseCountOrderByAggregateInput;

    @Field(() => pokemon_species_proseAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_species_proseAvgOrderByAggregateInput;

    @Field(() => pokemon_species_proseMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_species_proseMaxOrderByAggregateInput;

    @Field(() => pokemon_species_proseMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_species_proseMinOrderByAggregateInput;

    @Field(() => pokemon_species_proseSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_species_proseSumOrderByAggregateInput;
}

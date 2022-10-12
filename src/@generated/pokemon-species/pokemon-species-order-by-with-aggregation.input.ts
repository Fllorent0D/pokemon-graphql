import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_speciesCountOrderByAggregateInput } from './pokemon-species-count-order-by-aggregate.input';
import { pokemon_speciesAvgOrderByAggregateInput } from './pokemon-species-avg-order-by-aggregate.input';
import { pokemon_speciesMaxOrderByAggregateInput } from './pokemon-species-max-order-by-aggregate.input';
import { pokemon_speciesMinOrderByAggregateInput } from './pokemon-species-min-order-by-aggregate.input';
import { pokemon_speciesSumOrderByAggregateInput } from './pokemon-species-sum-order-by-aggregate.input';

@InputType()
export class pokemon_speciesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolves_from_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolution_chain_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shape_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    capture_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_happiness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_baby?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hatch_counter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    has_gender_differences?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    forms_switchable?: keyof typeof SortOrder;

    @Field(() => pokemon_speciesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_speciesCountOrderByAggregateInput;

    @Field(() => pokemon_speciesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_speciesAvgOrderByAggregateInput;

    @Field(() => pokemon_speciesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_speciesMaxOrderByAggregateInput;

    @Field(() => pokemon_speciesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_speciesMinOrderByAggregateInput;

    @Field(() => pokemon_speciesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_speciesSumOrderByAggregateInput;
}

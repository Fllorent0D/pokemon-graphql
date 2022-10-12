import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_species_flavor_textCountOrderByAggregateInput } from './pokemon-species-flavor-text-count-order-by-aggregate.input';
import { pokemon_species_flavor_textAvgOrderByAggregateInput } from './pokemon-species-flavor-text-avg-order-by-aggregate.input';
import { pokemon_species_flavor_textMaxOrderByAggregateInput } from './pokemon-species-flavor-text-max-order-by-aggregate.input';
import { pokemon_species_flavor_textMinOrderByAggregateInput } from './pokemon-species-flavor-text-min-order-by-aggregate.input';
import { pokemon_species_flavor_textSumOrderByAggregateInput } from './pokemon-species-flavor-text-sum-order-by-aggregate.input';

@InputType()
export class pokemon_species_flavor_textOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => pokemon_species_flavor_textCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_species_flavor_textCountOrderByAggregateInput;

    @Field(() => pokemon_species_flavor_textAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_species_flavor_textAvgOrderByAggregateInput;

    @Field(() => pokemon_species_flavor_textMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_species_flavor_textMaxOrderByAggregateInput;

    @Field(() => pokemon_species_flavor_textMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_species_flavor_textMinOrderByAggregateInput;

    @Field(() => pokemon_species_flavor_textSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_species_flavor_textSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_species_namesCountOrderByAggregateInput } from './pokemon-species-names-count-order-by-aggregate.input';
import { pokemon_species_namesAvgOrderByAggregateInput } from './pokemon-species-names-avg-order-by-aggregate.input';
import { pokemon_species_namesMaxOrderByAggregateInput } from './pokemon-species-names-max-order-by-aggregate.input';
import { pokemon_species_namesMinOrderByAggregateInput } from './pokemon-species-names-min-order-by-aggregate.input';
import { pokemon_species_namesSumOrderByAggregateInput } from './pokemon-species-names-sum-order-by-aggregate.input';

@InputType()
export class pokemon_species_namesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genus?: keyof typeof SortOrder;

    @Field(() => pokemon_species_namesCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_species_namesCountOrderByAggregateInput;

    @Field(() => pokemon_species_namesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_species_namesAvgOrderByAggregateInput;

    @Field(() => pokemon_species_namesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_species_namesMaxOrderByAggregateInput;

    @Field(() => pokemon_species_namesMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_species_namesMinOrderByAggregateInput;

    @Field(() => pokemon_species_namesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_species_namesSumOrderByAggregateInput;
}

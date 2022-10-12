import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_evolutionCountOrderByAggregateInput } from './pokemon-evolution-count-order-by-aggregate.input';
import { pokemon_evolutionAvgOrderByAggregateInput } from './pokemon-evolution-avg-order-by-aggregate.input';
import { pokemon_evolutionMaxOrderByAggregateInput } from './pokemon-evolution-max-order-by-aggregate.input';
import { pokemon_evolutionMinOrderByAggregateInput } from './pokemon-evolution-min-order-by-aggregate.input';
import { pokemon_evolutionSumOrderByAggregateInput } from './pokemon-evolution-sum-order-by-aggregate.input';

@InputType()
export class pokemon_evolutionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolved_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolution_trigger_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trigger_item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimum_level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    held_item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time_of_day?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    known_move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimum_happiness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimum_beauty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relative_physical_stats?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    party_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trade_species_id?: keyof typeof SortOrder;

    @Field(() => pokemon_evolutionCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_evolutionCountOrderByAggregateInput;

    @Field(() => pokemon_evolutionAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_evolutionAvgOrderByAggregateInput;

    @Field(() => pokemon_evolutionMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_evolutionMaxOrderByAggregateInput;

    @Field(() => pokemon_evolutionMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_evolutionMinOrderByAggregateInput;

    @Field(() => pokemon_evolutionSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_evolutionSumOrderByAggregateInput;
}

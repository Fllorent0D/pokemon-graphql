import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { regionsOrderByWithRelationInput } from '../regions/regions-order-by-with-relation.input';
import { location_areasOrderByRelationAggregateInput } from '../location-areas/location-areas-order-by-relation-aggregate.input';
import { location_game_indicesOrderByRelationAggregateInput } from '../location-game-indices/location-game-indices-order-by-relation-aggregate.input';
import { location_namesOrderByRelationAggregateInput } from '../location-names/location-names-order-by-relation-aggregate.input';
import { pokemon_evolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';

@InputType()
export class locationsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => regionsOrderByWithRelationInput, {nullable:true})
    regions?: regionsOrderByWithRelationInput;

    @Field(() => location_areasOrderByRelationAggregateInput, {nullable:true})
    location_areas?: location_areasOrderByRelationAggregateInput;

    @Field(() => location_game_indicesOrderByRelationAggregateInput, {nullable:true})
    location_game_indices?: location_game_indicesOrderByRelationAggregateInput;

    @Field(() => location_namesOrderByRelationAggregateInput, {nullable:true})
    location_names?: location_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_evolutionOrderByRelationAggregateInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionOrderByRelationAggregateInput;
}

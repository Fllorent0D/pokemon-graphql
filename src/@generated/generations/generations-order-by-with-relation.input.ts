import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokedexesOrderByWithRelationInput } from '../pokedexes/pokedexes-order-by-with-relation.input';
import { regionsOrderByWithRelationInput } from '../regions/regions-order-by-with-relation.input';
import { abilitiesOrderByRelationAggregateInput } from '../abilities/abilities-order-by-relation-aggregate.input';
import { generation_namesOrderByRelationAggregateInput } from '../generation-names/generation-names-order-by-relation-aggregate.input';
import { item_game_indicesOrderByRelationAggregateInput } from '../item-game-indices/item-game-indices-order-by-relation-aggregate.input';
import { location_game_indicesOrderByRelationAggregateInput } from '../location-game-indices/location-game-indices-order-by-relation-aggregate.input';
import { movesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';
import { pokemon_game_indicesOrderByRelationAggregateInput } from '../pokemon-game-indices/pokemon-game-indices-order-by-relation-aggregate.input';
import { pokemon_speciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';
import { typesOrderByRelationAggregateInput } from '../types/types-order-by-relation-aggregate.input';
import { version_groupsOrderByRelationAggregateInput } from '../version-groups/version-groups-order-by-relation-aggregate.input';

@InputType()
export class generationsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    main_region_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    canonical_pokedex_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokedexesOrderByWithRelationInput, {nullable:true})
    pokedexes?: pokedexesOrderByWithRelationInput;

    @Field(() => regionsOrderByWithRelationInput, {nullable:true})
    regions?: regionsOrderByWithRelationInput;

    @Field(() => abilitiesOrderByRelationAggregateInput, {nullable:true})
    abilities?: abilitiesOrderByRelationAggregateInput;

    @Field(() => generation_namesOrderByRelationAggregateInput, {nullable:true})
    generation_names?: generation_namesOrderByRelationAggregateInput;

    @Field(() => item_game_indicesOrderByRelationAggregateInput, {nullable:true})
    item_game_indices?: item_game_indicesOrderByRelationAggregateInput;

    @Field(() => location_game_indicesOrderByRelationAggregateInput, {nullable:true})
    location_game_indices?: location_game_indicesOrderByRelationAggregateInput;

    @Field(() => movesOrderByRelationAggregateInput, {nullable:true})
    moves?: movesOrderByRelationAggregateInput;

    @Field(() => pokemon_game_indicesOrderByRelationAggregateInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesOrderByRelationAggregateInput;

    @Field(() => pokemon_speciesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByRelationAggregateInput;

    @Field(() => typesOrderByRelationAggregateInput, {nullable:true})
    types?: typesOrderByRelationAggregateInput;

    @Field(() => version_groupsOrderByRelationAggregateInput, {nullable:true})
    version_groups?: version_groupsOrderByRelationAggregateInput;
}

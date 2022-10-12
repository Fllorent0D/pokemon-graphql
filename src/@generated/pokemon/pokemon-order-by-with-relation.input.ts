import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_speciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';
import { encountersOrderByRelationAggregateInput } from '../encounters/encounters-order-by-relation-aggregate.input';
import { pokemon_abilitiesOrderByRelationAggregateInput } from '../pokemon-abilities/pokemon-abilities-order-by-relation-aggregate.input';
import { pokemon_formsOrderByRelationAggregateInput } from '../pokemon-forms/pokemon-forms-order-by-relation-aggregate.input';
import { pokemon_game_indicesOrderByRelationAggregateInput } from '../pokemon-game-indices/pokemon-game-indices-order-by-relation-aggregate.input';
import { pokemon_itemsOrderByRelationAggregateInput } from '../pokemon-items/pokemon-items-order-by-relation-aggregate.input';
import { pokemon_statsOrderByRelationAggregateInput } from '../pokemon-stats/pokemon-stats-order-by-relation-aggregate.input';
import { pokemon_typesOrderByRelationAggregateInput } from '../pokemon-types/pokemon-types-order-by-relation-aggregate.input';

@InputType()
export class pokemonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_experience?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_default?: keyof typeof SortOrder;

    @Field(() => pokemon_speciesOrderByWithRelationInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByWithRelationInput;

    @Field(() => encountersOrderByRelationAggregateInput, {nullable:true})
    encounters?: encountersOrderByRelationAggregateInput;

    @Field(() => pokemon_abilitiesOrderByRelationAggregateInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesOrderByRelationAggregateInput;

    @Field(() => pokemon_formsOrderByRelationAggregateInput, {nullable:true})
    pokemon_forms?: pokemon_formsOrderByRelationAggregateInput;

    @Field(() => pokemon_game_indicesOrderByRelationAggregateInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesOrderByRelationAggregateInput;

    @Field(() => pokemon_itemsOrderByRelationAggregateInput, {nullable:true})
    pokemon_items?: pokemon_itemsOrderByRelationAggregateInput;

    @Field(() => pokemon_statsOrderByRelationAggregateInput, {nullable:true})
    pokemon_stats?: pokemon_statsOrderByRelationAggregateInput;

    @Field(() => pokemon_typesOrderByRelationAggregateInput, {nullable:true})
    pokemon_types?: pokemon_typesOrderByRelationAggregateInput;
}

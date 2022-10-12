import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_speciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';
import { movesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';
import { itemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { locationsOrderByWithRelationInput } from '../locations/locations-order-by-with-relation.input';
import { evolution_triggersOrderByWithRelationInput } from '../evolution-triggers/evolution-triggers-order-by-with-relation.input';

@InputType()
export class pokemon_evolutionOrderByWithRelationInput {

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

    @Field(() => pokemon_speciesOrderByWithRelationInput, {nullable:true})
    pokemon_species_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_speciesOrderByWithRelationInput;

    @Field(() => pokemon_speciesOrderByWithRelationInput, {nullable:true})
    pokemon_species_pokemon_evolution_party_species_idTopokemon_species?: pokemon_speciesOrderByWithRelationInput;

    @Field(() => movesOrderByWithRelationInput, {nullable:true})
    moves?: movesOrderByWithRelationInput;

    @Field(() => itemsOrderByWithRelationInput, {nullable:true})
    items_itemsTopokemon_evolution_held_item_id?: itemsOrderByWithRelationInput;

    @Field(() => locationsOrderByWithRelationInput, {nullable:true})
    locations?: locationsOrderByWithRelationInput;

    @Field(() => itemsOrderByWithRelationInput, {nullable:true})
    items_itemsTopokemon_evolution_trigger_item_id?: itemsOrderByWithRelationInput;

    @Field(() => evolution_triggersOrderByWithRelationInput, {nullable:true})
    evolution_triggers?: evolution_triggersOrderByWithRelationInput;

    @Field(() => pokemon_speciesOrderByWithRelationInput, {nullable:true})
    pokemon_species_pokemon_evolution_evolved_species_idTopokemon_species?: pokemon_speciesOrderByWithRelationInput;
}

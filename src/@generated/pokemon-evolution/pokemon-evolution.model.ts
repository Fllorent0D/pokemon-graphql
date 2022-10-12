import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';
import { moves } from '../moves/moves.model';
import { items } from '../items/items.model';
import { locations } from '../locations/locations.model';
import { evolution_triggers } from '../evolution-triggers/evolution-triggers.model';

@ObjectType()
export class pokemon_evolution {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    evolved_species_id!: number;

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:true})
    trigger_item_id!: number | null;

    @Field(() => Int, {nullable:true})
    minimum_level!: number | null;

    @Field(() => String, {nullable:true})
    gender!: string | null;

    @Field(() => Int, {nullable:true})
    location_id!: number | null;

    @Field(() => Int, {nullable:true})
    held_item_id!: number | null;

    @Field(() => String, {nullable:true})
    time_of_day!: string | null;

    @Field(() => Int, {nullable:true})
    known_move_id!: number | null;

    @Field(() => Int, {nullable:true})
    minimum_happiness!: number | null;

    @Field(() => Int, {nullable:true})
    minimum_beauty!: number | null;

    @Field(() => Int, {nullable:true})
    relative_physical_stats!: number | null;

    @Field(() => Int, {nullable:true})
    party_species_id!: number | null;

    @Field(() => Int, {nullable:true})
    trade_species_id!: number | null;

    @Field(() => pokemon_species, {nullable:true})
    pokemon_species_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_species | null;

    @Field(() => pokemon_species, {nullable:true})
    pokemon_species_pokemon_evolution_party_species_idTopokemon_species?: pokemon_species | null;

    @Field(() => moves, {nullable:true})
    moves?: moves | null;

    @Field(() => items, {nullable:true})
    items_itemsTopokemon_evolution_held_item_id?: items | null;

    @Field(() => locations, {nullable:true})
    locations?: locations | null;

    @Field(() => items, {nullable:true})
    items_itemsTopokemon_evolution_trigger_item_id?: items | null;

    @Field(() => evolution_triggers, {nullable:false})
    evolution_triggers?: evolution_triggers;

    @Field(() => pokemon_species, {nullable:false})
    pokemon_species_pokemon_evolution_evolved_species_idTopokemon_species?: pokemon_species;
}

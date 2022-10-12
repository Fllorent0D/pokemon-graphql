import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-evolution-pokemon-evolution-trade-species-id-topokemon-species.input';
import { pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_party_species_idTopokemon_speciesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-evolution-pokemon-evolution-party-species-id-topokemon-species.input';
import { itemsCreateNestedOneWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput } from '../items/items-create-nested-one-without-pokemon-evolution-items-topokemon-evolution-held-item-id.input';
import { locationsCreateNestedOneWithoutPokemon_evolutionInput } from '../locations/locations-create-nested-one-without-pokemon-evolution.input';
import { itemsCreateNestedOneWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idInput } from '../items/items-create-nested-one-without-pokemon-evolution-items-topokemon-evolution-trigger-item-id.input';
import { evolution_triggersCreateNestedOneWithoutPokemon_evolutionInput } from '../evolution-triggers/evolution-triggers-create-nested-one-without-pokemon-evolution.input';
import { pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-evolution-pokemon-evolution-evolved-species-id-topokemon-species.input';

@InputType()
export class pokemon_evolutionCreateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    minimum_level?: number;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => String, {nullable:true})
    time_of_day?: string;

    @Field(() => Int, {nullable:true})
    minimum_happiness?: number;

    @Field(() => Int, {nullable:true})
    minimum_beauty?: number;

    @Field(() => Int, {nullable:true})
    relative_physical_stats?: number;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput, {nullable:true})
    pokemon_species_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesInput;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_party_species_idTopokemon_speciesInput, {nullable:true})
    pokemon_species_pokemon_evolution_party_species_idTopokemon_species?: pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_party_species_idTopokemon_speciesInput;

    @Field(() => itemsCreateNestedOneWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    items_itemsTopokemon_evolution_held_item_id?: itemsCreateNestedOneWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => locationsCreateNestedOneWithoutPokemon_evolutionInput, {nullable:true})
    locations?: locationsCreateNestedOneWithoutPokemon_evolutionInput;

    @Field(() => itemsCreateNestedOneWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idInput, {nullable:true})
    items_itemsTopokemon_evolution_trigger_item_id?: itemsCreateNestedOneWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idInput;

    @Field(() => evolution_triggersCreateNestedOneWithoutPokemon_evolutionInput, {nullable:false})
    evolution_triggers!: evolution_triggersCreateNestedOneWithoutPokemon_evolutionInput;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:false})
    pokemon_species_pokemon_evolution_evolved_species_idTopokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { pokemon_speciesUpdateOneWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput } from '../pokemon-species/pokemon-species-update-one-without-pokemon-evolution-pokemon-evolution-trade-species-id-topokemon-species-nested.input';
import { pokemon_speciesUpdateOneWithoutPokemon_evolution_pokemon_evolution_party_species_idTopokemon_speciesNestedInput } from '../pokemon-species/pokemon-species-update-one-without-pokemon-evolution-pokemon-evolution-party-species-id-topokemon-species-nested.input';
import { itemsUpdateOneWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idNestedInput } from '../items/items-update-one-without-pokemon-evolution-items-topokemon-evolution-held-item-id-nested.input';
import { locationsUpdateOneWithoutPokemon_evolutionNestedInput } from '../locations/locations-update-one-without-pokemon-evolution-nested.input';
import { itemsUpdateOneWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idNestedInput } from '../items/items-update-one-without-pokemon-evolution-items-topokemon-evolution-trigger-item-id-nested.input';
import { evolution_triggersUpdateOneRequiredWithoutPokemon_evolutionNestedInput } from '../evolution-triggers/evolution-triggers-update-one-required-without-pokemon-evolution-nested.input';
import { pokemon_speciesUpdateOneRequiredWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-evolution-pokemon-evolution-evolved-species-id-topokemon-species-nested.input';

@InputType()
export class pokemon_evolutionUpdateWithoutMovesInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    minimum_level?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    time_of_day?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    minimum_happiness?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    minimum_beauty?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    relative_physical_stats?: NullableIntFieldUpdateOperationsInput;

    @Field(() => pokemon_speciesUpdateOneWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_species_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_speciesUpdateOneWithoutPokemon_evolution_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput;

    @Field(() => pokemon_speciesUpdateOneWithoutPokemon_evolution_pokemon_evolution_party_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_species_pokemon_evolution_party_species_idTopokemon_species?: pokemon_speciesUpdateOneWithoutPokemon_evolution_pokemon_evolution_party_species_idTopokemon_speciesNestedInput;

    @Field(() => itemsUpdateOneWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idNestedInput, {nullable:true})
    items_itemsTopokemon_evolution_held_item_id?: itemsUpdateOneWithoutPokemon_evolution_itemsTopokemon_evolution_held_item_idNestedInput;

    @Field(() => locationsUpdateOneWithoutPokemon_evolutionNestedInput, {nullable:true})
    locations?: locationsUpdateOneWithoutPokemon_evolutionNestedInput;

    @Field(() => itemsUpdateOneWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idNestedInput, {nullable:true})
    items_itemsTopokemon_evolution_trigger_item_id?: itemsUpdateOneWithoutPokemon_evolution_itemsTopokemon_evolution_trigger_item_idNestedInput;

    @Field(() => evolution_triggersUpdateOneRequiredWithoutPokemon_evolutionNestedInput, {nullable:true})
    evolution_triggers?: evolution_triggersUpdateOneRequiredWithoutPokemon_evolutionNestedInput;

    @Field(() => pokemon_speciesUpdateOneRequiredWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_species_pokemon_evolution_evolved_species_idTopokemon_species?: pokemon_speciesUpdateOneRequiredWithoutPokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput;
}

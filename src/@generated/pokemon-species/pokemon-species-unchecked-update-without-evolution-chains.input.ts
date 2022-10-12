import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { pokemonUncheckedUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon/pokemon-unchecked-update-many-without-pokemon-species-nested.input';
import { pokemon_dex_numbersUncheckedUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-unchecked-update-many-without-pokemon-species-nested.input';
import { pokemon_egg_groupsUncheckedUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-update-many-without-pokemon-species-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-pokemon-species-pokemon-evolution-trade-species-id-topokemon-species-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-pokemon-species-pokemon-evolution-evolved-species-id-topokemon-species-nested.input';
import { pokemon_speciesUncheckedUpdateManyWithoutPokemon_speciesNestedInput } from './pokemon-species-unchecked-update-many-without-pokemon-species-nested.input';
import { pokemon_species_flavor_summariesUncheckedUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-unchecked-update-many-without-pokemon-species-nested.input';
import { pokemon_species_flavor_textUncheckedUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-unchecked-update-many-without-pokemon-species-nested.input';
import { pokemon_species_namesUncheckedUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-species-names/pokemon-species-names-unchecked-update-many-without-pokemon-species-nested.input';
import { pokemon_species_proseUncheckedUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-species-prose/pokemon-species-prose-unchecked-update-many-without-pokemon-species-nested.input';

@InputType()
export class pokemon_speciesUncheckedUpdateWithoutEvolution_chainsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    evolves_from_species_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    color_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    shape_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    habitat_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    gender_rate?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    capture_rate?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_happiness?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_baby?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    hatch_counter?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    has_gender_differences?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    growth_rate_id?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    forms_switchable?: BoolFieldUpdateOperationsInput;

    @Field(() => pokemonUncheckedUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon?: pokemonUncheckedUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_dex_numbersUncheckedUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersUncheckedUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_egg_groupsUncheckedUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsUncheckedUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_party_species_idTopokemon_species?: pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_species?: pokemon_evolutionUncheckedUpdateManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput;

    @Field(() => pokemon_speciesUncheckedUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    other_pokemon_species?: pokemon_speciesUncheckedUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_species_flavor_summariesUncheckedUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesUncheckedUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_species_flavor_textUncheckedUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUncheckedUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_species_namesUncheckedUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesUncheckedUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_species_proseUncheckedUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseUncheckedUpdateManyWithoutPokemon_speciesNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { growth_ratesUpdateOneRequiredWithoutPokemon_speciesNestedInput } from '../growth-rates/growth-rates-update-one-required-without-pokemon-species-nested.input';
import { pokemon_habitatsUpdateOneWithoutPokemon_speciesNestedInput } from '../pokemon-habitats/pokemon-habitats-update-one-without-pokemon-species-nested.input';
import { pokemon_shapesUpdateOneRequiredWithoutPokemon_speciesNestedInput } from '../pokemon-shapes/pokemon-shapes-update-one-required-without-pokemon-species-nested.input';
import { pokemon_colorsUpdateOneRequiredWithoutPokemon_speciesNestedInput } from '../pokemon-colors/pokemon-colors-update-one-required-without-pokemon-species-nested.input';
import { evolution_chainsUpdateOneWithoutPokemon_speciesNestedInput } from '../evolution-chains/evolution-chains-update-one-without-pokemon-species-nested.input';
import { pokemon_speciesUpdateOneWithoutOther_pokemon_speciesNestedInput } from './pokemon-species-update-one-without-other-pokemon-species-nested.input';
import { generationsUpdateOneWithoutPokemon_speciesNestedInput } from '../generations/generations-update-one-without-pokemon-species-nested.input';
import { pokemonUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon/pokemon-update-many-without-pokemon-species-nested.input';
import { pokemon_dex_numbersUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update-many-without-pokemon-species-nested.input';
import { pokemon_egg_groupsUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-egg-groups/pokemon-egg-groups-update-many-without-pokemon-species-nested.input';
import { pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-pokemon-species-pokemon-evolution-trade-species-id-topokemon-species-nested.input';
import { pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species-nested.input';
import { pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-pokemon-species-pokemon-evolution-evolved-species-id-topokemon-species-nested.input';
import { pokemon_speciesUpdateManyWithoutPokemon_speciesNestedInput } from './pokemon-species-update-many-without-pokemon-species-nested.input';
import { pokemon_species_flavor_summariesUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-update-many-without-pokemon-species-nested.input';
import { pokemon_species_flavor_textUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-update-many-without-pokemon-species-nested.input';
import { pokemon_species_proseUpdateManyWithoutPokemon_speciesNestedInput } from '../pokemon-species-prose/pokemon-species-prose-update-many-without-pokemon-species-nested.input';

@InputType()
export class pokemon_speciesUpdateWithoutPokemon_species_namesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

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

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    forms_switchable?: BoolFieldUpdateOperationsInput;

    @Field(() => growth_ratesUpdateOneRequiredWithoutPokemon_speciesNestedInput, {nullable:true})
    growth_rates?: growth_ratesUpdateOneRequiredWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_habitatsUpdateOneWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_habitats?: pokemon_habitatsUpdateOneWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_shapesUpdateOneRequiredWithoutPokemon_speciesNestedInput, {nullable:true})
    shape?: pokemon_shapesUpdateOneRequiredWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_colorsUpdateOneRequiredWithoutPokemon_speciesNestedInput, {nullable:true})
    color?: pokemon_colorsUpdateOneRequiredWithoutPokemon_speciesNestedInput;

    @Field(() => evolution_chainsUpdateOneWithoutPokemon_speciesNestedInput, {nullable:true})
    evolution_chains?: evolution_chainsUpdateOneWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_speciesUpdateOneWithoutOther_pokemon_speciesNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateOneWithoutOther_pokemon_speciesNestedInput;

    @Field(() => generationsUpdateOneWithoutPokemon_speciesNestedInput, {nullable:true})
    generations?: generationsUpdateOneWithoutPokemon_speciesNestedInput;

    @Field(() => pokemonUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon?: pokemonUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_dex_numbersUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_egg_groupsUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_party_species_idTopokemon_species?: pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_species?: pokemon_evolutionUpdateManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesNestedInput;

    @Field(() => pokemon_speciesUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    other_pokemon_species?: pokemon_speciesUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_species_flavor_summariesUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_species_flavor_textUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUpdateManyWithoutPokemon_speciesNestedInput;

    @Field(() => pokemon_species_proseUpdateManyWithoutPokemon_speciesNestedInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseUpdateManyWithoutPokemon_speciesNestedInput;
}

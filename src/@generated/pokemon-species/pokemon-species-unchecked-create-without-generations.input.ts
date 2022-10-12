import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonUncheckedCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon/pokemon-unchecked-create-nested-many-without-pokemon-species.input';
import { pokemon_dex_numbersUncheckedCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-unchecked-create-nested-many-without-pokemon-species.input';
import { pokemon_egg_groupsUncheckedCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-create-nested-many-without-pokemon-species.input';
import { pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-pokemon-species-pokemon-evolution-trade-species-id-topokemon-species.input';
import { pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';
import { pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-pokemon-species-pokemon-evolution-evolved-species-id-topokemon-species.input';
import { pokemon_speciesUncheckedCreateNestedManyWithoutPokemon_speciesInput } from './pokemon-species-unchecked-create-nested-many-without-pokemon-species.input';
import { pokemon_species_flavor_summariesUncheckedCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-unchecked-create-nested-many-without-pokemon-species.input';
import { pokemon_species_flavor_textUncheckedCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-unchecked-create-nested-many-without-pokemon-species.input';
import { pokemon_species_namesUncheckedCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-species-names/pokemon-species-names-unchecked-create-nested-many-without-pokemon-species.input';
import { pokemon_species_proseUncheckedCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-species-prose/pokemon-species-prose-unchecked-create-nested-many-without-pokemon-species.input';

@InputType()
export class pokemon_speciesUncheckedCreateWithoutGenerationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:true})
    evolves_from_species_id?: number;

    @Field(() => Int, {nullable:true})
    evolution_chain_id?: number;

    @Field(() => Int, {nullable:false})
    color_id!: number;

    @Field(() => Int, {nullable:false})
    shape_id!: number;

    @Field(() => Int, {nullable:true})
    habitat_id?: number;

    @Field(() => Int, {nullable:false})
    gender_rate!: number;

    @Field(() => Int, {nullable:false})
    capture_rate!: number;

    @Field(() => Int, {nullable:false})
    base_happiness!: number;

    @Field(() => Boolean, {nullable:false})
    is_baby!: boolean;

    @Field(() => Int, {nullable:false})
    hatch_counter!: number;

    @Field(() => Boolean, {nullable:false})
    has_gender_differences!: boolean;

    @Field(() => Int, {nullable:false})
    growth_rate_id!: number;

    @Field(() => Boolean, {nullable:false})
    forms_switchable!: boolean;

    @Field(() => pokemonUncheckedCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon?: pokemonUncheckedCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_dex_numbersUncheckedCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersUncheckedCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_egg_groupsUncheckedCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsUncheckedCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput;

    @Field(() => pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_party_species_idTopokemon_species?: pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput;

    @Field(() => pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_species?: pokemon_evolutionUncheckedCreateNestedManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    other_pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_flavor_summariesUncheckedCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesUncheckedCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_flavor_textUncheckedCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUncheckedCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_namesUncheckedCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesUncheckedCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_proseUncheckedCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseUncheckedCreateNestedManyWithoutPokemon_speciesInput;
}

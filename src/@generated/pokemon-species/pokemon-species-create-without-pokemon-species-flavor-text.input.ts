import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { growth_ratesCreateNestedOneWithoutPokemon_speciesInput } from '../growth-rates/growth-rates-create-nested-one-without-pokemon-species.input';
import { pokemon_habitatsCreateNestedOneWithoutPokemon_speciesInput } from '../pokemon-habitats/pokemon-habitats-create-nested-one-without-pokemon-species.input';
import { pokemon_shapesCreateNestedOneWithoutPokemon_speciesInput } from '../pokemon-shapes/pokemon-shapes-create-nested-one-without-pokemon-species.input';
import { pokemon_colorsCreateNestedOneWithoutPokemon_speciesInput } from '../pokemon-colors/pokemon-colors-create-nested-one-without-pokemon-species.input';
import { evolution_chainsCreateNestedOneWithoutPokemon_speciesInput } from '../evolution-chains/evolution-chains-create-nested-one-without-pokemon-species.input';
import { pokemon_speciesCreateNestedOneWithoutOther_pokemon_speciesInput } from './pokemon-species-create-nested-one-without-other-pokemon-species.input';
import { generationsCreateNestedOneWithoutPokemon_speciesInput } from '../generations/generations-create-nested-one-without-pokemon-species.input';
import { pokemonCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon/pokemon-create-nested-many-without-pokemon-species.input';
import { pokemon_dex_numbersCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-create-nested-many-without-pokemon-species.input';
import { pokemon_egg_groupsCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-egg-groups/pokemon-egg-groups-create-nested-many-without-pokemon-species.input';
import { pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-pokemon-species-pokemon-evolution-trade-species-id-topokemon-species.input';
import { pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';
import { pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-pokemon-species-pokemon-evolution-evolved-species-id-topokemon-species.input';
import { pokemon_speciesCreateNestedManyWithoutPokemon_speciesInput } from './pokemon-species-create-nested-many-without-pokemon-species.input';
import { pokemon_species_flavor_summariesCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-create-nested-many-without-pokemon-species.input';
import { pokemon_species_namesCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-species-names/pokemon-species-names-create-nested-many-without-pokemon-species.input';
import { pokemon_species_proseCreateNestedManyWithoutPokemon_speciesInput } from '../pokemon-species-prose/pokemon-species-prose-create-nested-many-without-pokemon-species.input';

@InputType()
export class pokemon_speciesCreateWithoutPokemon_species_flavor_textInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

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

    @Field(() => Boolean, {nullable:false})
    forms_switchable!: boolean;

    @Field(() => growth_ratesCreateNestedOneWithoutPokemon_speciesInput, {nullable:false})
    growth_rates!: growth_ratesCreateNestedOneWithoutPokemon_speciesInput;

    @Field(() => pokemon_habitatsCreateNestedOneWithoutPokemon_speciesInput, {nullable:true})
    pokemon_habitats?: pokemon_habitatsCreateNestedOneWithoutPokemon_speciesInput;

    @Field(() => pokemon_shapesCreateNestedOneWithoutPokemon_speciesInput, {nullable:false})
    shape!: pokemon_shapesCreateNestedOneWithoutPokemon_speciesInput;

    @Field(() => pokemon_colorsCreateNestedOneWithoutPokemon_speciesInput, {nullable:false})
    color!: pokemon_colorsCreateNestedOneWithoutPokemon_speciesInput;

    @Field(() => evolution_chainsCreateNestedOneWithoutPokemon_speciesInput, {nullable:true})
    evolution_chains?: evolution_chainsCreateNestedOneWithoutPokemon_speciesInput;

    @Field(() => pokemon_speciesCreateNestedOneWithoutOther_pokemon_speciesInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedOneWithoutOther_pokemon_speciesInput;

    @Field(() => generationsCreateNestedOneWithoutPokemon_speciesInput, {nullable:true})
    generations?: generationsCreateNestedOneWithoutPokemon_speciesInput;

    @Field(() => pokemonCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon?: pokemonCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_dex_numbersCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_egg_groupsCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_trade_species_idTopokemon_speciesInput;

    @Field(() => pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_party_species_idTopokemon_species?: pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput;

    @Field(() => pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_species?: pokemon_evolutionCreateNestedManyWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput;

    @Field(() => pokemon_speciesCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    other_pokemon_species?: pokemon_speciesCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_flavor_summariesCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_namesCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesCreateNestedManyWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_proseCreateNestedManyWithoutPokemon_speciesInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseCreateNestedManyWithoutPokemon_speciesInput;
}

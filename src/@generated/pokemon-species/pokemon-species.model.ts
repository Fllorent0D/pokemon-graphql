import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { growth_rates } from '../growth-rates/growth-rates.model';
import { pokemon_habitats } from '../pokemon-habitats/pokemon-habitats.model';
import { pokemon_shapes } from '../pokemon-shapes/pokemon-shapes.model';
import { pokemon_colors } from '../pokemon-colors/pokemon-colors.model';
import { evolution_chains } from '../evolution-chains/evolution-chains.model';
import { generations } from '../generations/generations.model';
import { pokemon } from '../pokemon/pokemon.model';
import { pokemon_dex_numbers } from '../pokemon-dex-numbers/pokemon-dex-numbers.model';
import { pokemon_egg_groups } from '../pokemon-egg-groups/pokemon-egg-groups.model';
import { pokemon_evolution } from '../pokemon-evolution/pokemon-evolution.model';
import { pokemon_species_flavor_summaries } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries.model';
import { pokemon_species_flavor_text } from '../pokemon-species-flavor-text/pokemon-species-flavor-text.model';
import { pokemon_species_names } from '../pokemon-species-names/pokemon-species-names.model';
import { pokemon_species_prose } from '../pokemon-species-prose/pokemon-species-prose.model';
import { Pokemon_speciesCount } from '../prisma/pokemon-species-count.output';

@ObjectType()
export class pokemon_species {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:true})
    generation_id!: number | null;

    @Field(() => Int, {nullable:true})
    evolves_from_species_id!: number | null;

    @Field(() => Int, {nullable:true})
    evolution_chain_id!: number | null;

    @Field(() => Int, {nullable:false})
    color_id!: number;

    @Field(() => Int, {nullable:false})
    shape_id!: number;

    @Field(() => Int, {nullable:true})
    habitat_id!: number | null;

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

    @Field(() => growth_rates, {nullable:false})
    growth_rates?: growth_rates;

    @Field(() => pokemon_habitats, {nullable:true})
    pokemon_habitats?: pokemon_habitats | null;

    @Field(() => pokemon_shapes, {nullable:false})
    shape?: pokemon_shapes;

    @Field(() => pokemon_colors, {nullable:false})
    color?: pokemon_colors;

    @Field(() => evolution_chains, {nullable:true})
    evolution_chains?: evolution_chains | null;

    @Field(() => pokemon_species, {nullable:true})
    pokemon_species?: pokemon_species | null;

    @Field(() => generations, {nullable:true})
    generations?: generations | null;

    @Field(() => [pokemon], {nullable:true})
    pokemon?: Array<pokemon>;

    @Field(() => [pokemon_dex_numbers], {nullable:true})
    pokemon_dex_numbers?: Array<pokemon_dex_numbers>;

    @Field(() => [pokemon_egg_groups], {nullable:true})
    pokemon_egg_groups?: Array<pokemon_egg_groups>;

    @Field(() => [pokemon_evolution], {nullable:true})
    pokemon_evolution_pokemon_evolution_trade_species_idTopokemon_species?: Array<pokemon_evolution>;

    @Field(() => [pokemon_evolution], {nullable:true})
    pokemon_evolution_pokemon_evolution_party_species_idTopokemon_species?: Array<pokemon_evolution>;

    @Field(() => [pokemon_evolution], {nullable:true})
    pokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_species?: Array<pokemon_evolution>;

    @Field(() => [pokemon_species], {nullable:true})
    other_pokemon_species?: Array<pokemon_species>;

    @Field(() => [pokemon_species_flavor_summaries], {nullable:true})
    pokemon_species_flavor_summaries?: Array<pokemon_species_flavor_summaries>;

    @Field(() => [pokemon_species_flavor_text], {nullable:true})
    pokemon_species_flavor_text?: Array<pokemon_species_flavor_text>;

    @Field(() => [pokemon_species_names], {nullable:true})
    pokemon_species_names?: Array<pokemon_species_names>;

    @Field(() => [pokemon_species_prose], {nullable:true})
    pokemon_species_prose?: Array<pokemon_species_prose>;

    @Field(() => Pokemon_speciesCount, {nullable:false})
    _count?: Pokemon_speciesCount;
}

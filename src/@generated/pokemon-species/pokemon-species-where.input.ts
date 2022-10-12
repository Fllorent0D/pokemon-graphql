import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Growth_ratesRelationFilter } from '../prisma/growth-rates-relation-filter.input';
import { Pokemon_habitatsRelationFilter } from '../prisma/pokemon-habitats-relation-filter.input';
import { Pokemon_shapesRelationFilter } from '../prisma/pokemon-shapes-relation-filter.input';
import { Pokemon_colorsRelationFilter } from '../prisma/pokemon-colors-relation-filter.input';
import { Evolution_chainsRelationFilter } from '../prisma/evolution-chains-relation-filter.input';
import { Pokemon_speciesRelationFilter } from '../prisma/pokemon-species-relation-filter.input';
import { GenerationsRelationFilter } from '../prisma/generations-relation-filter.input';
import { PokemonListRelationFilter } from '../prisma/pokemon-list-relation-filter.input';
import { Pokemon_dex_numbersListRelationFilter } from '../prisma/pokemon-dex-numbers-list-relation-filter.input';
import { Pokemon_egg_groupsListRelationFilter } from '../prisma/pokemon-egg-groups-list-relation-filter.input';
import { Pokemon_evolutionListRelationFilter } from '../prisma/pokemon-evolution-list-relation-filter.input';
import { Pokemon_speciesListRelationFilter } from '../prisma/pokemon-species-list-relation-filter.input';
import { Pokemon_species_flavor_summariesListRelationFilter } from '../prisma/pokemon-species-flavor-summaries-list-relation-filter.input';
import { Pokemon_species_flavor_textListRelationFilter } from '../prisma/pokemon-species-flavor-text-list-relation-filter.input';
import { Pokemon_species_namesListRelationFilter } from '../prisma/pokemon-species-names-list-relation-filter.input';
import { Pokemon_species_proseListRelationFilter } from '../prisma/pokemon-species-prose-list-relation-filter.input';

@InputType()
export class pokemon_speciesWhereInput {

    @Field(() => [pokemon_speciesWhereInput], {nullable:true})
    AND?: Array<pokemon_speciesWhereInput>;

    @Field(() => [pokemon_speciesWhereInput], {nullable:true})
    OR?: Array<pokemon_speciesWhereInput>;

    @Field(() => [pokemon_speciesWhereInput], {nullable:true})
    NOT?: Array<pokemon_speciesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    generation_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    evolves_from_species_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    evolution_chain_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    color_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    shape_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    habitat_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    gender_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    capture_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_happiness?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_baby?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    hatch_counter?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    has_gender_differences?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    forms_switchable?: BoolFilter;

    @Field(() => Growth_ratesRelationFilter, {nullable:true})
    growth_rates?: Growth_ratesRelationFilter;

    @Field(() => Pokemon_habitatsRelationFilter, {nullable:true})
    pokemon_habitats?: Pokemon_habitatsRelationFilter;

    @Field(() => Pokemon_shapesRelationFilter, {nullable:true})
    shape?: Pokemon_shapesRelationFilter;

    @Field(() => Pokemon_colorsRelationFilter, {nullable:true})
    color?: Pokemon_colorsRelationFilter;

    @Field(() => Evolution_chainsRelationFilter, {nullable:true})
    evolution_chains?: Evolution_chainsRelationFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesRelationFilter;

    @Field(() => GenerationsRelationFilter, {nullable:true})
    generations?: GenerationsRelationFilter;

    @Field(() => PokemonListRelationFilter, {nullable:true})
    pokemon?: PokemonListRelationFilter;

    @Field(() => Pokemon_dex_numbersListRelationFilter, {nullable:true})
    pokemon_dex_numbers?: Pokemon_dex_numbersListRelationFilter;

    @Field(() => Pokemon_egg_groupsListRelationFilter, {nullable:true})
    pokemon_egg_groups?: Pokemon_egg_groupsListRelationFilter;

    @Field(() => Pokemon_evolutionListRelationFilter, {nullable:true})
    pokemon_evolution_pokemon_evolution_trade_species_idTopokemon_species?: Pokemon_evolutionListRelationFilter;

    @Field(() => Pokemon_evolutionListRelationFilter, {nullable:true})
    pokemon_evolution_pokemon_evolution_party_species_idTopokemon_species?: Pokemon_evolutionListRelationFilter;

    @Field(() => Pokemon_evolutionListRelationFilter, {nullable:true})
    pokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_species?: Pokemon_evolutionListRelationFilter;

    @Field(() => Pokemon_speciesListRelationFilter, {nullable:true})
    other_pokemon_species?: Pokemon_speciesListRelationFilter;

    @Field(() => Pokemon_species_flavor_summariesListRelationFilter, {nullable:true})
    pokemon_species_flavor_summaries?: Pokemon_species_flavor_summariesListRelationFilter;

    @Field(() => Pokemon_species_flavor_textListRelationFilter, {nullable:true})
    pokemon_species_flavor_text?: Pokemon_species_flavor_textListRelationFilter;

    @Field(() => Pokemon_species_namesListRelationFilter, {nullable:true})
    pokemon_species_names?: Pokemon_species_namesListRelationFilter;

    @Field(() => Pokemon_species_proseListRelationFilter, {nullable:true})
    pokemon_species_prose?: Pokemon_species_proseListRelationFilter;
}

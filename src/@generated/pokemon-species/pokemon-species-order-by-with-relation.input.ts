import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { growth_ratesOrderByWithRelationInput } from '../growth-rates/growth-rates-order-by-with-relation.input';
import { pokemon_habitatsOrderByWithRelationInput } from '../pokemon-habitats/pokemon-habitats-order-by-with-relation.input';
import { pokemon_shapesOrderByWithRelationInput } from '../pokemon-shapes/pokemon-shapes-order-by-with-relation.input';
import { pokemon_colorsOrderByWithRelationInput } from '../pokemon-colors/pokemon-colors-order-by-with-relation.input';
import { evolution_chainsOrderByWithRelationInput } from '../evolution-chains/evolution-chains-order-by-with-relation.input';
import { generationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { pokemonOrderByRelationAggregateInput } from '../pokemon/pokemon-order-by-relation-aggregate.input';
import { pokemon_dex_numbersOrderByRelationAggregateInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-order-by-relation-aggregate.input';
import { pokemon_egg_groupsOrderByRelationAggregateInput } from '../pokemon-egg-groups/pokemon-egg-groups-order-by-relation-aggregate.input';
import { pokemon_evolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';
import { pokemon_speciesOrderByRelationAggregateInput } from './pokemon-species-order-by-relation-aggregate.input';
import { pokemon_species_flavor_summariesOrderByRelationAggregateInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-order-by-relation-aggregate.input';
import { pokemon_species_flavor_textOrderByRelationAggregateInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-order-by-relation-aggregate.input';
import { pokemon_species_namesOrderByRelationAggregateInput } from '../pokemon-species-names/pokemon-species-names-order-by-relation-aggregate.input';
import { pokemon_species_proseOrderByRelationAggregateInput } from '../pokemon-species-prose/pokemon-species-prose-order-by-relation-aggregate.input';

@InputType()
export class pokemon_speciesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolves_from_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolution_chain_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shape_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    habitat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    capture_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    base_happiness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_baby?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hatch_counter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    has_gender_differences?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    forms_switchable?: keyof typeof SortOrder;

    @Field(() => growth_ratesOrderByWithRelationInput, {nullable:true})
    growth_rates?: growth_ratesOrderByWithRelationInput;

    @Field(() => pokemon_habitatsOrderByWithRelationInput, {nullable:true})
    pokemon_habitats?: pokemon_habitatsOrderByWithRelationInput;

    @Field(() => pokemon_shapesOrderByWithRelationInput, {nullable:true})
    shape?: pokemon_shapesOrderByWithRelationInput;

    @Field(() => pokemon_colorsOrderByWithRelationInput, {nullable:true})
    color?: pokemon_colorsOrderByWithRelationInput;

    @Field(() => evolution_chainsOrderByWithRelationInput, {nullable:true})
    evolution_chains?: evolution_chainsOrderByWithRelationInput;

    @Field(() => pokemon_speciesOrderByWithRelationInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByWithRelationInput;

    @Field(() => generationsOrderByWithRelationInput, {nullable:true})
    generations?: generationsOrderByWithRelationInput;

    @Field(() => pokemonOrderByRelationAggregateInput, {nullable:true})
    pokemon?: pokemonOrderByRelationAggregateInput;

    @Field(() => pokemon_dex_numbersOrderByRelationAggregateInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersOrderByRelationAggregateInput;

    @Field(() => pokemon_egg_groupsOrderByRelationAggregateInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsOrderByRelationAggregateInput;

    @Field(() => pokemon_evolutionOrderByRelationAggregateInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_trade_species_idTopokemon_species?: pokemon_evolutionOrderByRelationAggregateInput;

    @Field(() => pokemon_evolutionOrderByRelationAggregateInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_party_species_idTopokemon_species?: pokemon_evolutionOrderByRelationAggregateInput;

    @Field(() => pokemon_evolutionOrderByRelationAggregateInput, {nullable:true})
    pokemon_evolution_pokemon_evolution_evolved_species_idTopokemon_species?: pokemon_evolutionOrderByRelationAggregateInput;

    @Field(() => pokemon_speciesOrderByRelationAggregateInput, {nullable:true})
    other_pokemon_species?: pokemon_speciesOrderByRelationAggregateInput;

    @Field(() => pokemon_species_flavor_summariesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesOrderByRelationAggregateInput;

    @Field(() => pokemon_species_flavor_textOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textOrderByRelationAggregateInput;

    @Field(() => pokemon_species_namesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_species_proseOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseOrderByRelationAggregateInput;
}

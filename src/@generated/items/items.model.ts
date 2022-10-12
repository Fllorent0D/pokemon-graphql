import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_fling_effects } from '../item-fling-effects/item-fling-effects.model';
import { item_categories } from '../item-categories/item-categories.model';
import { berries } from '../berries/berries.model';
import { evolution_chains } from '../evolution-chains/evolution-chains.model';
import { item_flag_map } from '../item-flag-map/item-flag-map.model';
import { item_flavor_summaries } from '../item-flavor-summaries/item-flavor-summaries.model';
import { item_flavor_text } from '../item-flavor-text/item-flavor-text.model';
import { item_game_indices } from '../item-game-indices/item-game-indices.model';
import { item_names } from '../item-names/item-names.model';
import { item_prose } from '../item-prose/item-prose.model';
import { machines } from '../machines/machines.model';
import { pokemon_evolution } from '../pokemon-evolution/pokemon-evolution.model';
import { pokemon_items } from '../pokemon-items/pokemon-items.model';
import { ItemsCount } from '../prisma/items-count.output';

@ObjectType()
export class items {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:true})
    fling_power!: number | null;

    @Field(() => Int, {nullable:true})
    fling_effect_id!: number | null;

    @Field(() => item_fling_effects, {nullable:true})
    item_fling_effects?: item_fling_effects | null;

    @Field(() => item_categories, {nullable:false})
    item_categories?: item_categories;

    @Field(() => [berries], {nullable:true})
    berries?: Array<berries>;

    @Field(() => [evolution_chains], {nullable:true})
    evolution_chains?: Array<evolution_chains>;

    @Field(() => [item_flag_map], {nullable:true})
    item_flag_map?: Array<item_flag_map>;

    @Field(() => [item_flavor_summaries], {nullable:true})
    item_flavor_summaries?: Array<item_flavor_summaries>;

    @Field(() => [item_flavor_text], {nullable:true})
    item_flavor_text?: Array<item_flavor_text>;

    @Field(() => [item_game_indices], {nullable:true})
    item_game_indices?: Array<item_game_indices>;

    @Field(() => [item_names], {nullable:true})
    item_names?: Array<item_names>;

    @Field(() => [item_prose], {nullable:true})
    item_prose?: Array<item_prose>;

    @Field(() => [machines], {nullable:true})
    machines?: Array<machines>;

    @Field(() => [pokemon_evolution], {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_held_item_id?: Array<pokemon_evolution>;

    @Field(() => [pokemon_evolution], {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_trigger_item_id?: Array<pokemon_evolution>;

    @Field(() => [pokemon_items], {nullable:true})
    pokemon_items?: Array<pokemon_items>;

    @Field(() => ItemsCount, {nullable:false})
    _count?: ItemsCount;
}

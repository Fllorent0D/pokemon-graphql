import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { item_fling_effectsCreateNestedOneWithoutItemsInput } from '../item-fling-effects/item-fling-effects-create-nested-one-without-items.input';
import { item_categoriesCreateNestedOneWithoutItemsInput } from '../item-categories/item-categories-create-nested-one-without-items.input';
import { berriesCreateNestedManyWithoutItemsInput } from '../berries/berries-create-nested-many-without-items.input';
import { evolution_chainsCreateNestedManyWithoutItemsInput } from '../evolution-chains/evolution-chains-create-nested-many-without-items.input';
import { item_flag_mapCreateNestedManyWithoutItemsInput } from '../item-flag-map/item-flag-map-create-nested-many-without-items.input';
import { item_flavor_summariesCreateNestedManyWithoutItemsInput } from '../item-flavor-summaries/item-flavor-summaries-create-nested-many-without-items.input';
import { item_flavor_textCreateNestedManyWithoutItemsInput } from '../item-flavor-text/item-flavor-text-create-nested-many-without-items.input';
import { item_game_indicesCreateNestedManyWithoutItemsInput } from '../item-game-indices/item-game-indices-create-nested-many-without-items.input';
import { item_proseCreateNestedManyWithoutItemsInput } from '../item-prose/item-prose-create-nested-many-without-items.input';
import { machinesCreateNestedManyWithoutItemsInput } from '../machines/machines-create-nested-many-without-items.input';
import { pokemon_evolutionCreateNestedManyWithoutItems_itemsTopokemon_evolution_held_item_idInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-items-items-topokemon-evolution-held-item-id.input';
import { pokemon_evolutionCreateNestedManyWithoutItems_itemsTopokemon_evolution_trigger_item_idInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-items-items-topokemon-evolution-trigger-item-id.input';
import { pokemon_itemsCreateNestedManyWithoutItemsInput } from '../pokemon-items/pokemon-items-create-nested-many-without-items.input';

@InputType()
export class itemsCreateWithoutItem_namesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;

    @Field(() => item_fling_effectsCreateNestedOneWithoutItemsInput, {nullable:true})
    item_fling_effects?: item_fling_effectsCreateNestedOneWithoutItemsInput;

    @Field(() => item_categoriesCreateNestedOneWithoutItemsInput, {nullable:false})
    item_categories!: item_categoriesCreateNestedOneWithoutItemsInput;

    @Field(() => berriesCreateNestedManyWithoutItemsInput, {nullable:true})
    berries?: berriesCreateNestedManyWithoutItemsInput;

    @Field(() => evolution_chainsCreateNestedManyWithoutItemsInput, {nullable:true})
    evolution_chains?: evolution_chainsCreateNestedManyWithoutItemsInput;

    @Field(() => item_flag_mapCreateNestedManyWithoutItemsInput, {nullable:true})
    item_flag_map?: item_flag_mapCreateNestedManyWithoutItemsInput;

    @Field(() => item_flavor_summariesCreateNestedManyWithoutItemsInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesCreateNestedManyWithoutItemsInput;

    @Field(() => item_flavor_textCreateNestedManyWithoutItemsInput, {nullable:true})
    item_flavor_text?: item_flavor_textCreateNestedManyWithoutItemsInput;

    @Field(() => item_game_indicesCreateNestedManyWithoutItemsInput, {nullable:true})
    item_game_indices?: item_game_indicesCreateNestedManyWithoutItemsInput;

    @Field(() => item_proseCreateNestedManyWithoutItemsInput, {nullable:true})
    item_prose?: item_proseCreateNestedManyWithoutItemsInput;

    @Field(() => machinesCreateNestedManyWithoutItemsInput, {nullable:true})
    machines?: machinesCreateNestedManyWithoutItemsInput;

    @Field(() => pokemon_evolutionCreateNestedManyWithoutItems_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_held_item_id?: pokemon_evolutionCreateNestedManyWithoutItems_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => pokemon_evolutionCreateNestedManyWithoutItems_itemsTopokemon_evolution_trigger_item_idInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_trigger_item_id?: pokemon_evolutionCreateNestedManyWithoutItems_itemsTopokemon_evolution_trigger_item_idInput;

    @Field(() => pokemon_itemsCreateNestedManyWithoutItemsInput, {nullable:true})
    pokemon_items?: pokemon_itemsCreateNestedManyWithoutItemsInput;
}

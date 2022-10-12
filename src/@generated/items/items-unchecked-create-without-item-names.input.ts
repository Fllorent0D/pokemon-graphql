import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berriesUncheckedCreateNestedManyWithoutItemsInput } from '../berries/berries-unchecked-create-nested-many-without-items.input';
import { evolution_chainsUncheckedCreateNestedManyWithoutItemsInput } from '../evolution-chains/evolution-chains-unchecked-create-nested-many-without-items.input';
import { item_flag_mapUncheckedCreateNestedManyWithoutItemsInput } from '../item-flag-map/item-flag-map-unchecked-create-nested-many-without-items.input';
import { item_flavor_summariesUncheckedCreateNestedManyWithoutItemsInput } from '../item-flavor-summaries/item-flavor-summaries-unchecked-create-nested-many-without-items.input';
import { item_flavor_textUncheckedCreateNestedManyWithoutItemsInput } from '../item-flavor-text/item-flavor-text-unchecked-create-nested-many-without-items.input';
import { item_game_indicesUncheckedCreateNestedManyWithoutItemsInput } from '../item-game-indices/item-game-indices-unchecked-create-nested-many-without-items.input';
import { item_proseUncheckedCreateNestedManyWithoutItemsInput } from '../item-prose/item-prose-unchecked-create-nested-many-without-items.input';
import { machinesUncheckedCreateNestedManyWithoutItemsInput } from '../machines/machines-unchecked-create-nested-many-without-items.input';
import { pokemon_evolutionUncheckedCreateNestedManyWithoutItems_itemsTopokemon_evolution_held_item_idInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-items-items-topokemon-evolution-held-item-id.input';
import { pokemon_evolutionUncheckedCreateNestedManyWithoutItems_itemsTopokemon_evolution_trigger_item_idInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-items-items-topokemon-evolution-trigger-item-id.input';
import { pokemon_itemsUncheckedCreateNestedManyWithoutItemsInput } from '../pokemon-items/pokemon-items-unchecked-create-nested-many-without-items.input';

@InputType()
export class itemsUncheckedCreateWithoutItem_namesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Int, {nullable:false})
    cost!: number;

    @Field(() => Int, {nullable:true})
    fling_power?: number;

    @Field(() => Int, {nullable:true})
    fling_effect_id?: number;

    @Field(() => berriesUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    berries?: berriesUncheckedCreateNestedManyWithoutItemsInput;

    @Field(() => evolution_chainsUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    evolution_chains?: evolution_chainsUncheckedCreateNestedManyWithoutItemsInput;

    @Field(() => item_flag_mapUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    item_flag_map?: item_flag_mapUncheckedCreateNestedManyWithoutItemsInput;

    @Field(() => item_flavor_summariesUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesUncheckedCreateNestedManyWithoutItemsInput;

    @Field(() => item_flavor_textUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    item_flavor_text?: item_flavor_textUncheckedCreateNestedManyWithoutItemsInput;

    @Field(() => item_game_indicesUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    item_game_indices?: item_game_indicesUncheckedCreateNestedManyWithoutItemsInput;

    @Field(() => item_proseUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    item_prose?: item_proseUncheckedCreateNestedManyWithoutItemsInput;

    @Field(() => machinesUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    machines?: machinesUncheckedCreateNestedManyWithoutItemsInput;

    @Field(() => pokemon_evolutionUncheckedCreateNestedManyWithoutItems_itemsTopokemon_evolution_held_item_idInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_held_item_id?: pokemon_evolutionUncheckedCreateNestedManyWithoutItems_itemsTopokemon_evolution_held_item_idInput;

    @Field(() => pokemon_evolutionUncheckedCreateNestedManyWithoutItems_itemsTopokemon_evolution_trigger_item_idInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_trigger_item_id?: pokemon_evolutionUncheckedCreateNestedManyWithoutItems_itemsTopokemon_evolution_trigger_item_idInput;

    @Field(() => pokemon_itemsUncheckedCreateNestedManyWithoutItemsInput, {nullable:true})
    pokemon_items?: pokemon_itemsUncheckedCreateNestedManyWithoutItemsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { item_fling_effectsUpdateOneWithoutItemsNestedInput } from '../item-fling-effects/item-fling-effects-update-one-without-items-nested.input';
import { item_categoriesUpdateOneRequiredWithoutItemsNestedInput } from '../item-categories/item-categories-update-one-required-without-items-nested.input';
import { berriesUpdateManyWithoutItemsNestedInput } from '../berries/berries-update-many-without-items-nested.input';
import { evolution_chainsUpdateManyWithoutItemsNestedInput } from '../evolution-chains/evolution-chains-update-many-without-items-nested.input';
import { item_flavor_summariesUpdateManyWithoutItemsNestedInput } from '../item-flavor-summaries/item-flavor-summaries-update-many-without-items-nested.input';
import { item_flavor_textUpdateManyWithoutItemsNestedInput } from '../item-flavor-text/item-flavor-text-update-many-without-items-nested.input';
import { item_game_indicesUpdateManyWithoutItemsNestedInput } from '../item-game-indices/item-game-indices-update-many-without-items-nested.input';
import { item_namesUpdateManyWithoutItemsNestedInput } from '../item-names/item-names-update-many-without-items-nested.input';
import { item_proseUpdateManyWithoutItemsNestedInput } from '../item-prose/item-prose-update-many-without-items-nested.input';
import { machinesUpdateManyWithoutItemsNestedInput } from '../machines/machines-update-many-without-items-nested.input';
import { pokemon_evolutionUpdateManyWithoutItems_itemsTopokemon_evolution_held_item_idNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-items-items-topokemon-evolution-held-item-id-nested.input';
import { pokemon_evolutionUpdateManyWithoutItems_itemsTopokemon_evolution_trigger_item_idNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-items-items-topokemon-evolution-trigger-item-id-nested.input';
import { pokemon_itemsUpdateManyWithoutItemsNestedInput } from '../pokemon-items/pokemon-items-update-many-without-items-nested.input';

@InputType()
export class itemsUpdateWithoutItem_flag_mapInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cost?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fling_power?: NullableIntFieldUpdateOperationsInput;

    @Field(() => item_fling_effectsUpdateOneWithoutItemsNestedInput, {nullable:true})
    item_fling_effects?: item_fling_effectsUpdateOneWithoutItemsNestedInput;

    @Field(() => item_categoriesUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    item_categories?: item_categoriesUpdateOneRequiredWithoutItemsNestedInput;

    @Field(() => berriesUpdateManyWithoutItemsNestedInput, {nullable:true})
    berries?: berriesUpdateManyWithoutItemsNestedInput;

    @Field(() => evolution_chainsUpdateManyWithoutItemsNestedInput, {nullable:true})
    evolution_chains?: evolution_chainsUpdateManyWithoutItemsNestedInput;

    @Field(() => item_flavor_summariesUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesUpdateManyWithoutItemsNestedInput;

    @Field(() => item_flavor_textUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_flavor_text?: item_flavor_textUpdateManyWithoutItemsNestedInput;

    @Field(() => item_game_indicesUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_game_indices?: item_game_indicesUpdateManyWithoutItemsNestedInput;

    @Field(() => item_namesUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_names?: item_namesUpdateManyWithoutItemsNestedInput;

    @Field(() => item_proseUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_prose?: item_proseUpdateManyWithoutItemsNestedInput;

    @Field(() => machinesUpdateManyWithoutItemsNestedInput, {nullable:true})
    machines?: machinesUpdateManyWithoutItemsNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutItems_itemsTopokemon_evolution_held_item_idNestedInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_held_item_id?: pokemon_evolutionUpdateManyWithoutItems_itemsTopokemon_evolution_held_item_idNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutItems_itemsTopokemon_evolution_trigger_item_idNestedInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_trigger_item_id?: pokemon_evolutionUpdateManyWithoutItems_itemsTopokemon_evolution_trigger_item_idNestedInput;

    @Field(() => pokemon_itemsUpdateManyWithoutItemsNestedInput, {nullable:true})
    pokemon_items?: pokemon_itemsUpdateManyWithoutItemsNestedInput;
}

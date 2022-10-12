import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { berriesUncheckedUpdateManyWithoutItemsNestedInput } from '../berries/berries-unchecked-update-many-without-items-nested.input';
import { evolution_chainsUncheckedUpdateManyWithoutItemsNestedInput } from '../evolution-chains/evolution-chains-unchecked-update-many-without-items-nested.input';
import { item_flag_mapUncheckedUpdateManyWithoutItemsNestedInput } from '../item-flag-map/item-flag-map-unchecked-update-many-without-items-nested.input';
import { item_flavor_summariesUncheckedUpdateManyWithoutItemsNestedInput } from '../item-flavor-summaries/item-flavor-summaries-unchecked-update-many-without-items-nested.input';
import { item_flavor_textUncheckedUpdateManyWithoutItemsNestedInput } from '../item-flavor-text/item-flavor-text-unchecked-update-many-without-items-nested.input';
import { item_namesUncheckedUpdateManyWithoutItemsNestedInput } from '../item-names/item-names-unchecked-update-many-without-items-nested.input';
import { item_proseUncheckedUpdateManyWithoutItemsNestedInput } from '../item-prose/item-prose-unchecked-update-many-without-items-nested.input';
import { machinesUncheckedUpdateManyWithoutItemsNestedInput } from '../machines/machines-unchecked-update-many-without-items-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutItems_itemsTopokemon_evolution_held_item_idNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-items-items-topokemon-evolution-held-item-id-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutItems_itemsTopokemon_evolution_trigger_item_idNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-items-items-topokemon-evolution-trigger-item-id-nested.input';
import { pokemon_itemsUncheckedUpdateManyWithoutItemsNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-items-nested.input';

@InputType()
export class itemsUncheckedUpdateWithoutItem_game_indicesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    category_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cost?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fling_power?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fling_effect_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => berriesUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    berries?: berriesUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => evolution_chainsUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    evolution_chains?: evolution_chainsUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => item_flag_mapUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_flag_map?: item_flag_mapUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => item_flavor_summariesUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => item_flavor_textUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_flavor_text?: item_flavor_textUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => item_namesUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_names?: item_namesUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => item_proseUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    item_prose?: item_proseUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => machinesUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    machines?: machinesUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutItems_itemsTopokemon_evolution_held_item_idNestedInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_held_item_id?: pokemon_evolutionUncheckedUpdateManyWithoutItems_itemsTopokemon_evolution_held_item_idNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutItems_itemsTopokemon_evolution_trigger_item_idNestedInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_trigger_item_id?: pokemon_evolutionUncheckedUpdateManyWithoutItems_itemsTopokemon_evolution_trigger_item_idNestedInput;

    @Field(() => pokemon_itemsUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    pokemon_items?: pokemon_itemsUncheckedUpdateManyWithoutItemsNestedInput;
}

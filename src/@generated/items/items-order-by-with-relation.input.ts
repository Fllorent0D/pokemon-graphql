import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_fling_effectsOrderByWithRelationInput } from '../item-fling-effects/item-fling-effects-order-by-with-relation.input';
import { item_categoriesOrderByWithRelationInput } from '../item-categories/item-categories-order-by-with-relation.input';
import { berriesOrderByRelationAggregateInput } from '../berries/berries-order-by-relation-aggregate.input';
import { evolution_chainsOrderByRelationAggregateInput } from '../evolution-chains/evolution-chains-order-by-relation-aggregate.input';
import { item_flag_mapOrderByRelationAggregateInput } from '../item-flag-map/item-flag-map-order-by-relation-aggregate.input';
import { item_flavor_summariesOrderByRelationAggregateInput } from '../item-flavor-summaries/item-flavor-summaries-order-by-relation-aggregate.input';
import { item_flavor_textOrderByRelationAggregateInput } from '../item-flavor-text/item-flavor-text-order-by-relation-aggregate.input';
import { item_game_indicesOrderByRelationAggregateInput } from '../item-game-indices/item-game-indices-order-by-relation-aggregate.input';
import { item_namesOrderByRelationAggregateInput } from '../item-names/item-names-order-by-relation-aggregate.input';
import { item_proseOrderByRelationAggregateInput } from '../item-prose/item-prose-order-by-relation-aggregate.input';
import { machinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { pokemon_evolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';
import { pokemon_itemsOrderByRelationAggregateInput } from '../pokemon-items/pokemon-items-order-by-relation-aggregate.input';

@InputType()
export class itemsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fling_power?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fling_effect_id?: keyof typeof SortOrder;

    @Field(() => item_fling_effectsOrderByWithRelationInput, {nullable:true})
    item_fling_effects?: item_fling_effectsOrderByWithRelationInput;

    @Field(() => item_categoriesOrderByWithRelationInput, {nullable:true})
    item_categories?: item_categoriesOrderByWithRelationInput;

    @Field(() => berriesOrderByRelationAggregateInput, {nullable:true})
    berries?: berriesOrderByRelationAggregateInput;

    @Field(() => evolution_chainsOrderByRelationAggregateInput, {nullable:true})
    evolution_chains?: evolution_chainsOrderByRelationAggregateInput;

    @Field(() => item_flag_mapOrderByRelationAggregateInput, {nullable:true})
    item_flag_map?: item_flag_mapOrderByRelationAggregateInput;

    @Field(() => item_flavor_summariesOrderByRelationAggregateInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesOrderByRelationAggregateInput;

    @Field(() => item_flavor_textOrderByRelationAggregateInput, {nullable:true})
    item_flavor_text?: item_flavor_textOrderByRelationAggregateInput;

    @Field(() => item_game_indicesOrderByRelationAggregateInput, {nullable:true})
    item_game_indices?: item_game_indicesOrderByRelationAggregateInput;

    @Field(() => item_namesOrderByRelationAggregateInput, {nullable:true})
    item_names?: item_namesOrderByRelationAggregateInput;

    @Field(() => item_proseOrderByRelationAggregateInput, {nullable:true})
    item_prose?: item_proseOrderByRelationAggregateInput;

    @Field(() => machinesOrderByRelationAggregateInput, {nullable:true})
    machines?: machinesOrderByRelationAggregateInput;

    @Field(() => pokemon_evolutionOrderByRelationAggregateInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_held_item_id?: pokemon_evolutionOrderByRelationAggregateInput;

    @Field(() => pokemon_evolutionOrderByRelationAggregateInput, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_trigger_item_id?: pokemon_evolutionOrderByRelationAggregateInput;

    @Field(() => pokemon_itemsOrderByRelationAggregateInput, {nullable:true})
    pokemon_items?: pokemon_itemsOrderByRelationAggregateInput;
}

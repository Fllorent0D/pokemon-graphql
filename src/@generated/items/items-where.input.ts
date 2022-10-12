import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Item_fling_effectsRelationFilter } from '../prisma/item-fling-effects-relation-filter.input';
import { Item_categoriesRelationFilter } from '../prisma/item-categories-relation-filter.input';
import { BerriesListRelationFilter } from '../prisma/berries-list-relation-filter.input';
import { Evolution_chainsListRelationFilter } from '../prisma/evolution-chains-list-relation-filter.input';
import { Item_flag_mapListRelationFilter } from '../prisma/item-flag-map-list-relation-filter.input';
import { Item_flavor_summariesListRelationFilter } from '../prisma/item-flavor-summaries-list-relation-filter.input';
import { Item_flavor_textListRelationFilter } from '../prisma/item-flavor-text-list-relation-filter.input';
import { Item_game_indicesListRelationFilter } from '../prisma/item-game-indices-list-relation-filter.input';
import { Item_namesListRelationFilter } from '../prisma/item-names-list-relation-filter.input';
import { Item_proseListRelationFilter } from '../prisma/item-prose-list-relation-filter.input';
import { MachinesListRelationFilter } from '../prisma/machines-list-relation-filter.input';
import { Pokemon_evolutionListRelationFilter } from '../prisma/pokemon-evolution-list-relation-filter.input';
import { Pokemon_itemsListRelationFilter } from '../prisma/pokemon-items-list-relation-filter.input';

@InputType()
export class itemsWhereInput {

    @Field(() => [itemsWhereInput], {nullable:true})
    AND?: Array<itemsWhereInput>;

    @Field(() => [itemsWhereInput], {nullable:true})
    OR?: Array<itemsWhereInput>;

    @Field(() => [itemsWhereInput], {nullable:true})
    NOT?: Array<itemsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    cost?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fling_power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fling_effect_id?: IntNullableFilter;

    @Field(() => Item_fling_effectsRelationFilter, {nullable:true})
    item_fling_effects?: Item_fling_effectsRelationFilter;

    @Field(() => Item_categoriesRelationFilter, {nullable:true})
    item_categories?: Item_categoriesRelationFilter;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    berries?: BerriesListRelationFilter;

    @Field(() => Evolution_chainsListRelationFilter, {nullable:true})
    evolution_chains?: Evolution_chainsListRelationFilter;

    @Field(() => Item_flag_mapListRelationFilter, {nullable:true})
    item_flag_map?: Item_flag_mapListRelationFilter;

    @Field(() => Item_flavor_summariesListRelationFilter, {nullable:true})
    item_flavor_summaries?: Item_flavor_summariesListRelationFilter;

    @Field(() => Item_flavor_textListRelationFilter, {nullable:true})
    item_flavor_text?: Item_flavor_textListRelationFilter;

    @Field(() => Item_game_indicesListRelationFilter, {nullable:true})
    item_game_indices?: Item_game_indicesListRelationFilter;

    @Field(() => Item_namesListRelationFilter, {nullable:true})
    item_names?: Item_namesListRelationFilter;

    @Field(() => Item_proseListRelationFilter, {nullable:true})
    item_prose?: Item_proseListRelationFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;

    @Field(() => Pokemon_evolutionListRelationFilter, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_held_item_id?: Pokemon_evolutionListRelationFilter;

    @Field(() => Pokemon_evolutionListRelationFilter, {nullable:true})
    pokemon_evolution_itemsTopokemon_evolution_trigger_item_id?: Pokemon_evolutionListRelationFilter;

    @Field(() => Pokemon_itemsListRelationFilter, {nullable:true})
    pokemon_items?: Pokemon_itemsListRelationFilter;
}

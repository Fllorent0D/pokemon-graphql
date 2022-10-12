import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ability_changelog_proseOrderByRelationAggregateInput } from '../ability-changelog-prose/ability-changelog-prose-order-by-relation-aggregate.input';
import { ability_flavor_textOrderByRelationAggregateInput } from '../ability-flavor-text/ability-flavor-text-order-by-relation-aggregate.input';
import { ability_namesOrderByRelationAggregateInput } from '../ability-names/ability-names-order-by-relation-aggregate.input';
import { ability_proseOrderByRelationAggregateInput } from '../ability-prose/ability-prose-order-by-relation-aggregate.input';
import { berry_firmness_namesOrderByRelationAggregateInput } from '../berry-firmness-names/berry-firmness-names-order-by-relation-aggregate.input';
import { contest_effect_proseOrderByRelationAggregateInput } from '../contest-effect-prose/contest-effect-prose-order-by-relation-aggregate.input';
import { contest_type_namesOrderByRelationAggregateInput } from '../contest-type-names/contest-type-names-order-by-relation-aggregate.input';
import { egg_group_proseOrderByRelationAggregateInput } from '../egg-group-prose/egg-group-prose-order-by-relation-aggregate.input';
import { encounter_condition_proseOrderByRelationAggregateInput } from '../encounter-condition-prose/encounter-condition-prose-order-by-relation-aggregate.input';
import { encounter_condition_value_proseOrderByRelationAggregateInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-order-by-relation-aggregate.input';
import { encounter_method_proseOrderByRelationAggregateInput } from '../encounter-method-prose/encounter-method-prose-order-by-relation-aggregate.input';
import { evolution_trigger_proseOrderByRelationAggregateInput } from '../evolution-trigger-prose/evolution-trigger-prose-order-by-relation-aggregate.input';
import { generation_namesOrderByRelationAggregateInput } from '../generation-names/generation-names-order-by-relation-aggregate.input';
import { growth_rate_proseOrderByRelationAggregateInput } from '../growth-rate-prose/growth-rate-prose-order-by-relation-aggregate.input';
import { item_category_proseOrderByRelationAggregateInput } from '../item-category-prose/item-category-prose-order-by-relation-aggregate.input';
import { item_flag_proseOrderByRelationAggregateInput } from '../item-flag-prose/item-flag-prose-order-by-relation-aggregate.input';
import { item_flavor_summariesOrderByRelationAggregateInput } from '../item-flavor-summaries/item-flavor-summaries-order-by-relation-aggregate.input';
import { item_flavor_textOrderByRelationAggregateInput } from '../item-flavor-text/item-flavor-text-order-by-relation-aggregate.input';
import { item_fling_effect_proseOrderByRelationAggregateInput } from '../item-fling-effect-prose/item-fling-effect-prose-order-by-relation-aggregate.input';
import { item_namesOrderByRelationAggregateInput } from '../item-names/item-names-order-by-relation-aggregate.input';
import { item_pocket_namesOrderByRelationAggregateInput } from '../item-pocket-names/item-pocket-names-order-by-relation-aggregate.input';
import { item_proseOrderByRelationAggregateInput } from '../item-prose/item-prose-order-by-relation-aggregate.input';
import { language_namesOrderByRelationAggregateInput } from '../language-names/language-names-order-by-relation-aggregate.input';
import { location_area_proseOrderByRelationAggregateInput } from '../location-area-prose/location-area-prose-order-by-relation-aggregate.input';
import { location_namesOrderByRelationAggregateInput } from '../location-names/location-names-order-by-relation-aggregate.input';
import { move_battle_style_proseOrderByRelationAggregateInput } from '../move-battle-style-prose/move-battle-style-prose-order-by-relation-aggregate.input';
import { move_damage_class_proseOrderByRelationAggregateInput } from '../move-damage-class-prose/move-damage-class-prose-order-by-relation-aggregate.input';
import { move_effect_changelog_proseOrderByRelationAggregateInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-order-by-relation-aggregate.input';
import { move_effect_proseOrderByRelationAggregateInput } from '../move-effect-prose/move-effect-prose-order-by-relation-aggregate.input';
import { move_flag_proseOrderByRelationAggregateInput } from '../move-flag-prose/move-flag-prose-order-by-relation-aggregate.input';
import { move_flavor_summariesOrderByRelationAggregateInput } from '../move-flavor-summaries/move-flavor-summaries-order-by-relation-aggregate.input';
import { move_flavor_textOrderByRelationAggregateInput } from '../move-flavor-text/move-flavor-text-order-by-relation-aggregate.input';
import { move_meta_ailment_namesOrderByRelationAggregateInput } from '../move-meta-ailment-names/move-meta-ailment-names-order-by-relation-aggregate.input';
import { move_meta_category_proseOrderByRelationAggregateInput } from '../move-meta-category-prose/move-meta-category-prose-order-by-relation-aggregate.input';
import { move_namesOrderByRelationAggregateInput } from '../move-names/move-names-order-by-relation-aggregate.input';
import { move_target_proseOrderByRelationAggregateInput } from '../move-target-prose/move-target-prose-order-by-relation-aggregate.input';
import { nature_namesOrderByRelationAggregateInput } from '../nature-names/nature-names-order-by-relation-aggregate.input';
import { pokeathlon_stat_namesOrderByRelationAggregateInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-order-by-relation-aggregate.input';
import { pokedex_proseOrderByRelationAggregateInput } from '../pokedex-prose/pokedex-prose-order-by-relation-aggregate.input';
import { pokemon_color_namesOrderByRelationAggregateInput } from '../pokemon-color-names/pokemon-color-names-order-by-relation-aggregate.input';
import { pokemon_form_namesOrderByRelationAggregateInput } from '../pokemon-form-names/pokemon-form-names-order-by-relation-aggregate.input';
import { pokemon_habitat_namesOrderByRelationAggregateInput } from '../pokemon-habitat-names/pokemon-habitat-names-order-by-relation-aggregate.input';
import { pokemon_move_method_proseOrderByRelationAggregateInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-order-by-relation-aggregate.input';
import { pokemon_shape_proseOrderByRelationAggregateInput } from '../pokemon-shape-prose/pokemon-shape-prose-order-by-relation-aggregate.input';
import { pokemon_species_flavor_summariesOrderByRelationAggregateInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-order-by-relation-aggregate.input';
import { pokemon_species_flavor_textOrderByRelationAggregateInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-order-by-relation-aggregate.input';
import { pokemon_species_namesOrderByRelationAggregateInput } from '../pokemon-species-names/pokemon-species-names-order-by-relation-aggregate.input';
import { pokemon_species_proseOrderByRelationAggregateInput } from '../pokemon-species-prose/pokemon-species-prose-order-by-relation-aggregate.input';
import { region_namesOrderByRelationAggregateInput } from '../region-names/region-names-order-by-relation-aggregate.input';
import { stat_hint_namesOrderByRelationAggregateInput } from '../stat-hint-names/stat-hint-names-order-by-relation-aggregate.input';
import { stat_namesOrderByRelationAggregateInput } from '../stat-names/stat-names-order-by-relation-aggregate.input';
import { super_contest_effect_proseOrderByRelationAggregateInput } from '../super-contest-effect-prose/super-contest-effect-prose-order-by-relation-aggregate.input';
import { type_namesOrderByRelationAggregateInput } from '../type-names/type-names-order-by-relation-aggregate.input';
import { version_namesOrderByRelationAggregateInput } from '../version-names/version-names-order-by-relation-aggregate.input';

@InputType()
export class languagesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iso639?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iso3166?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    official?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => ability_changelog_proseOrderByRelationAggregateInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseOrderByRelationAggregateInput;

    @Field(() => ability_flavor_textOrderByRelationAggregateInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textOrderByRelationAggregateInput;

    @Field(() => ability_namesOrderByRelationAggregateInput, {nullable:true})
    ability_names?: ability_namesOrderByRelationAggregateInput;

    @Field(() => ability_proseOrderByRelationAggregateInput, {nullable:true})
    ability_prose?: ability_proseOrderByRelationAggregateInput;

    @Field(() => berry_firmness_namesOrderByRelationAggregateInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesOrderByRelationAggregateInput;

    @Field(() => contest_effect_proseOrderByRelationAggregateInput, {nullable:true})
    contest_effect_prose?: contest_effect_proseOrderByRelationAggregateInput;

    @Field(() => contest_type_namesOrderByRelationAggregateInput, {nullable:true})
    contest_type_names?: contest_type_namesOrderByRelationAggregateInput;

    @Field(() => egg_group_proseOrderByRelationAggregateInput, {nullable:true})
    egg_group_prose?: egg_group_proseOrderByRelationAggregateInput;

    @Field(() => encounter_condition_proseOrderByRelationAggregateInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseOrderByRelationAggregateInput;

    @Field(() => encounter_condition_value_proseOrderByRelationAggregateInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseOrderByRelationAggregateInput;

    @Field(() => encounter_method_proseOrderByRelationAggregateInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseOrderByRelationAggregateInput;

    @Field(() => evolution_trigger_proseOrderByRelationAggregateInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseOrderByRelationAggregateInput;

    @Field(() => generation_namesOrderByRelationAggregateInput, {nullable:true})
    generation_names?: generation_namesOrderByRelationAggregateInput;

    @Field(() => growth_rate_proseOrderByRelationAggregateInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseOrderByRelationAggregateInput;

    @Field(() => item_category_proseOrderByRelationAggregateInput, {nullable:true})
    item_category_prose?: item_category_proseOrderByRelationAggregateInput;

    @Field(() => item_flag_proseOrderByRelationAggregateInput, {nullable:true})
    item_flag_prose?: item_flag_proseOrderByRelationAggregateInput;

    @Field(() => item_flavor_summariesOrderByRelationAggregateInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesOrderByRelationAggregateInput;

    @Field(() => item_flavor_textOrderByRelationAggregateInput, {nullable:true})
    item_flavor_text?: item_flavor_textOrderByRelationAggregateInput;

    @Field(() => item_fling_effect_proseOrderByRelationAggregateInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseOrderByRelationAggregateInput;

    @Field(() => item_namesOrderByRelationAggregateInput, {nullable:true})
    item_names?: item_namesOrderByRelationAggregateInput;

    @Field(() => item_pocket_namesOrderByRelationAggregateInput, {nullable:true})
    item_pocket_names?: item_pocket_namesOrderByRelationAggregateInput;

    @Field(() => item_proseOrderByRelationAggregateInput, {nullable:true})
    item_prose?: item_proseOrderByRelationAggregateInput;

    @Field(() => language_namesOrderByRelationAggregateInput, {nullable:true})
    language_names_language_names_local_language_idTolanguages?: language_namesOrderByRelationAggregateInput;

    @Field(() => language_namesOrderByRelationAggregateInput, {nullable:true})
    language_names_language_names_language_idTolanguages?: language_namesOrderByRelationAggregateInput;

    @Field(() => location_area_proseOrderByRelationAggregateInput, {nullable:true})
    location_area_prose?: location_area_proseOrderByRelationAggregateInput;

    @Field(() => location_namesOrderByRelationAggregateInput, {nullable:true})
    location_names?: location_namesOrderByRelationAggregateInput;

    @Field(() => move_battle_style_proseOrderByRelationAggregateInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseOrderByRelationAggregateInput;

    @Field(() => move_damage_class_proseOrderByRelationAggregateInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseOrderByRelationAggregateInput;

    @Field(() => move_effect_changelog_proseOrderByRelationAggregateInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseOrderByRelationAggregateInput;

    @Field(() => move_effect_proseOrderByRelationAggregateInput, {nullable:true})
    move_effect_prose?: move_effect_proseOrderByRelationAggregateInput;

    @Field(() => move_flag_proseOrderByRelationAggregateInput, {nullable:true})
    move_flag_prose?: move_flag_proseOrderByRelationAggregateInput;

    @Field(() => move_flavor_summariesOrderByRelationAggregateInput, {nullable:true})
    move_flavor_summaries?: move_flavor_summariesOrderByRelationAggregateInput;

    @Field(() => move_flavor_textOrderByRelationAggregateInput, {nullable:true})
    move_flavor_text?: move_flavor_textOrderByRelationAggregateInput;

    @Field(() => move_meta_ailment_namesOrderByRelationAggregateInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesOrderByRelationAggregateInput;

    @Field(() => move_meta_category_proseOrderByRelationAggregateInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseOrderByRelationAggregateInput;

    @Field(() => move_namesOrderByRelationAggregateInput, {nullable:true})
    move_names?: move_namesOrderByRelationAggregateInput;

    @Field(() => move_target_proseOrderByRelationAggregateInput, {nullable:true})
    move_target_prose?: move_target_proseOrderByRelationAggregateInput;

    @Field(() => nature_namesOrderByRelationAggregateInput, {nullable:true})
    nature_names?: nature_namesOrderByRelationAggregateInput;

    @Field(() => pokeathlon_stat_namesOrderByRelationAggregateInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesOrderByRelationAggregateInput;

    @Field(() => pokedex_proseOrderByRelationAggregateInput, {nullable:true})
    pokedex_prose?: pokedex_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_color_namesOrderByRelationAggregateInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_form_namesOrderByRelationAggregateInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_habitat_namesOrderByRelationAggregateInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_move_method_proseOrderByRelationAggregateInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_shape_proseOrderByRelationAggregateInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_species_flavor_summariesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesOrderByRelationAggregateInput;

    @Field(() => pokemon_species_flavor_textOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textOrderByRelationAggregateInput;

    @Field(() => pokemon_species_namesOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_species_proseOrderByRelationAggregateInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseOrderByRelationAggregateInput;

    @Field(() => region_namesOrderByRelationAggregateInput, {nullable:true})
    region_names?: region_namesOrderByRelationAggregateInput;

    @Field(() => stat_hint_namesOrderByRelationAggregateInput, {nullable:true})
    stat_hint_names?: stat_hint_namesOrderByRelationAggregateInput;

    @Field(() => stat_namesOrderByRelationAggregateInput, {nullable:true})
    stat_names?: stat_namesOrderByRelationAggregateInput;

    @Field(() => super_contest_effect_proseOrderByRelationAggregateInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseOrderByRelationAggregateInput;

    @Field(() => type_namesOrderByRelationAggregateInput, {nullable:true})
    type_names?: type_namesOrderByRelationAggregateInput;

    @Field(() => version_namesOrderByRelationAggregateInput, {nullable:true})
    version_names?: version_namesOrderByRelationAggregateInput;
}

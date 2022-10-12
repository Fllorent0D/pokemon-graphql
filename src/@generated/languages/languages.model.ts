import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ability_changelog_prose } from '../ability-changelog-prose/ability-changelog-prose.model';
import { ability_flavor_text } from '../ability-flavor-text/ability-flavor-text.model';
import { ability_names } from '../ability-names/ability-names.model';
import { ability_prose } from '../ability-prose/ability-prose.model';
import { berry_firmness_names } from '../berry-firmness-names/berry-firmness-names.model';
import { contest_effect_prose } from '../contest-effect-prose/contest-effect-prose.model';
import { contest_type_names } from '../contest-type-names/contest-type-names.model';
import { egg_group_prose } from '../egg-group-prose/egg-group-prose.model';
import { encounter_condition_prose } from '../encounter-condition-prose/encounter-condition-prose.model';
import { encounter_condition_value_prose } from '../encounter-condition-value-prose/encounter-condition-value-prose.model';
import { encounter_method_prose } from '../encounter-method-prose/encounter-method-prose.model';
import { evolution_trigger_prose } from '../evolution-trigger-prose/evolution-trigger-prose.model';
import { generation_names } from '../generation-names/generation-names.model';
import { growth_rate_prose } from '../growth-rate-prose/growth-rate-prose.model';
import { item_category_prose } from '../item-category-prose/item-category-prose.model';
import { item_flag_prose } from '../item-flag-prose/item-flag-prose.model';
import { item_flavor_summaries } from '../item-flavor-summaries/item-flavor-summaries.model';
import { item_flavor_text } from '../item-flavor-text/item-flavor-text.model';
import { item_fling_effect_prose } from '../item-fling-effect-prose/item-fling-effect-prose.model';
import { item_names } from '../item-names/item-names.model';
import { item_pocket_names } from '../item-pocket-names/item-pocket-names.model';
import { item_prose } from '../item-prose/item-prose.model';
import { language_names } from '../language-names/language-names.model';
import { location_area_prose } from '../location-area-prose/location-area-prose.model';
import { location_names } from '../location-names/location-names.model';
import { move_battle_style_prose } from '../move-battle-style-prose/move-battle-style-prose.model';
import { move_damage_class_prose } from '../move-damage-class-prose/move-damage-class-prose.model';
import { move_effect_changelog_prose } from '../move-effect-changelog-prose/move-effect-changelog-prose.model';
import { move_effect_prose } from '../move-effect-prose/move-effect-prose.model';
import { move_flag_prose } from '../move-flag-prose/move-flag-prose.model';
import { move_flavor_summaries } from '../move-flavor-summaries/move-flavor-summaries.model';
import { move_flavor_text } from '../move-flavor-text/move-flavor-text.model';
import { move_meta_ailment_names } from '../move-meta-ailment-names/move-meta-ailment-names.model';
import { move_meta_category_prose } from '../move-meta-category-prose/move-meta-category-prose.model';
import { move_names } from '../move-names/move-names.model';
import { move_target_prose } from '../move-target-prose/move-target-prose.model';
import { nature_names } from '../nature-names/nature-names.model';
import { pokeathlon_stat_names } from '../pokeathlon-stat-names/pokeathlon-stat-names.model';
import { pokedex_prose } from '../pokedex-prose/pokedex-prose.model';
import { pokemon_color_names } from '../pokemon-color-names/pokemon-color-names.model';
import { pokemon_form_names } from '../pokemon-form-names/pokemon-form-names.model';
import { pokemon_habitat_names } from '../pokemon-habitat-names/pokemon-habitat-names.model';
import { pokemon_move_method_prose } from '../pokemon-move-method-prose/pokemon-move-method-prose.model';
import { pokemon_shape_prose } from '../pokemon-shape-prose/pokemon-shape-prose.model';
import { pokemon_species_flavor_summaries } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries.model';
import { pokemon_species_flavor_text } from '../pokemon-species-flavor-text/pokemon-species-flavor-text.model';
import { pokemon_species_names } from '../pokemon-species-names/pokemon-species-names.model';
import { pokemon_species_prose } from '../pokemon-species-prose/pokemon-species-prose.model';
import { region_names } from '../region-names/region-names.model';
import { stat_hint_names } from '../stat-hint-names/stat-hint-names.model';
import { stat_names } from '../stat-names/stat-names.model';
import { super_contest_effect_prose } from '../super-contest-effect-prose/super-contest-effect-prose.model';
import { type_names } from '../type-names/type-names.model';
import { version_names } from '../version-names/version-names.model';
import { LanguagesCount } from '../prisma/languages-count.output';

@ObjectType()
export class languages {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    iso639!: string;

    @Field(() => String, {nullable:false})
    iso3166!: string;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    official!: boolean;

    @Field(() => Int, {nullable:true})
    order!: number | null;

    @Field(() => [ability_changelog_prose], {nullable:true})
    ability_changelog_prose?: Array<ability_changelog_prose>;

    @Field(() => [ability_flavor_text], {nullable:true})
    ability_flavor_text?: Array<ability_flavor_text>;

    @Field(() => [ability_names], {nullable:true})
    ability_names?: Array<ability_names>;

    @Field(() => [ability_prose], {nullable:true})
    ability_prose?: Array<ability_prose>;

    @Field(() => [berry_firmness_names], {nullable:true})
    berry_firmness_names?: Array<berry_firmness_names>;

    @Field(() => [contest_effect_prose], {nullable:true})
    contest_effect_prose?: Array<contest_effect_prose>;

    @Field(() => [contest_type_names], {nullable:true})
    contest_type_names?: Array<contest_type_names>;

    @Field(() => [egg_group_prose], {nullable:true})
    egg_group_prose?: Array<egg_group_prose>;

    @Field(() => [encounter_condition_prose], {nullable:true})
    encounter_condition_prose?: Array<encounter_condition_prose>;

    @Field(() => [encounter_condition_value_prose], {nullable:true})
    encounter_condition_value_prose?: Array<encounter_condition_value_prose>;

    @Field(() => [encounter_method_prose], {nullable:true})
    encounter_method_prose?: Array<encounter_method_prose>;

    @Field(() => [evolution_trigger_prose], {nullable:true})
    evolution_trigger_prose?: Array<evolution_trigger_prose>;

    @Field(() => [generation_names], {nullable:true})
    generation_names?: Array<generation_names>;

    @Field(() => [growth_rate_prose], {nullable:true})
    growth_rate_prose?: Array<growth_rate_prose>;

    @Field(() => [item_category_prose], {nullable:true})
    item_category_prose?: Array<item_category_prose>;

    @Field(() => [item_flag_prose], {nullable:true})
    item_flag_prose?: Array<item_flag_prose>;

    @Field(() => [item_flavor_summaries], {nullable:true})
    item_flavor_summaries?: Array<item_flavor_summaries>;

    @Field(() => [item_flavor_text], {nullable:true})
    item_flavor_text?: Array<item_flavor_text>;

    @Field(() => [item_fling_effect_prose], {nullable:true})
    item_fling_effect_prose?: Array<item_fling_effect_prose>;

    @Field(() => [item_names], {nullable:true})
    item_names?: Array<item_names>;

    @Field(() => [item_pocket_names], {nullable:true})
    item_pocket_names?: Array<item_pocket_names>;

    @Field(() => [item_prose], {nullable:true})
    item_prose?: Array<item_prose>;

    @Field(() => [language_names], {nullable:true})
    language_names_language_names_local_language_idTolanguages?: Array<language_names>;

    @Field(() => [language_names], {nullable:true})
    language_names_language_names_language_idTolanguages?: Array<language_names>;

    @Field(() => [location_area_prose], {nullable:true})
    location_area_prose?: Array<location_area_prose>;

    @Field(() => [location_names], {nullable:true})
    location_names?: Array<location_names>;

    @Field(() => [move_battle_style_prose], {nullable:true})
    move_battle_style_prose?: Array<move_battle_style_prose>;

    @Field(() => [move_damage_class_prose], {nullable:true})
    move_damage_class_prose?: Array<move_damage_class_prose>;

    @Field(() => [move_effect_changelog_prose], {nullable:true})
    move_effect_changelog_prose?: Array<move_effect_changelog_prose>;

    @Field(() => [move_effect_prose], {nullable:true})
    move_effect_prose?: Array<move_effect_prose>;

    @Field(() => [move_flag_prose], {nullable:true})
    move_flag_prose?: Array<move_flag_prose>;

    @Field(() => [move_flavor_summaries], {nullable:true})
    move_flavor_summaries?: Array<move_flavor_summaries>;

    @Field(() => [move_flavor_text], {nullable:true})
    move_flavor_text?: Array<move_flavor_text>;

    @Field(() => [move_meta_ailment_names], {nullable:true})
    move_meta_ailment_names?: Array<move_meta_ailment_names>;

    @Field(() => [move_meta_category_prose], {nullable:true})
    move_meta_category_prose?: Array<move_meta_category_prose>;

    @Field(() => [move_names], {nullable:true})
    move_names?: Array<move_names>;

    @Field(() => [move_target_prose], {nullable:true})
    move_target_prose?: Array<move_target_prose>;

    @Field(() => [nature_names], {nullable:true})
    nature_names?: Array<nature_names>;

    @Field(() => [pokeathlon_stat_names], {nullable:true})
    pokeathlon_stat_names?: Array<pokeathlon_stat_names>;

    @Field(() => [pokedex_prose], {nullable:true})
    pokedex_prose?: Array<pokedex_prose>;

    @Field(() => [pokemon_color_names], {nullable:true})
    pokemon_color_names?: Array<pokemon_color_names>;

    @Field(() => [pokemon_form_names], {nullable:true})
    pokemon_form_names?: Array<pokemon_form_names>;

    @Field(() => [pokemon_habitat_names], {nullable:true})
    pokemon_habitat_names?: Array<pokemon_habitat_names>;

    @Field(() => [pokemon_move_method_prose], {nullable:true})
    pokemon_move_method_prose?: Array<pokemon_move_method_prose>;

    @Field(() => [pokemon_shape_prose], {nullable:true})
    pokemon_shape_prose?: Array<pokemon_shape_prose>;

    @Field(() => [pokemon_species_flavor_summaries], {nullable:true})
    pokemon_species_flavor_summaries?: Array<pokemon_species_flavor_summaries>;

    @Field(() => [pokemon_species_flavor_text], {nullable:true})
    pokemon_species_flavor_text?: Array<pokemon_species_flavor_text>;

    @Field(() => [pokemon_species_names], {nullable:true})
    pokemon_species_names?: Array<pokemon_species_names>;

    @Field(() => [pokemon_species_prose], {nullable:true})
    pokemon_species_prose?: Array<pokemon_species_prose>;

    @Field(() => [region_names], {nullable:true})
    region_names?: Array<region_names>;

    @Field(() => [stat_hint_names], {nullable:true})
    stat_hint_names?: Array<stat_hint_names>;

    @Field(() => [stat_names], {nullable:true})
    stat_names?: Array<stat_names>;

    @Field(() => [super_contest_effect_prose], {nullable:true})
    super_contest_effect_prose?: Array<super_contest_effect_prose>;

    @Field(() => [type_names], {nullable:true})
    type_names?: Array<type_names>;

    @Field(() => [version_names], {nullable:true})
    version_names?: Array<version_names>;

    @Field(() => LanguagesCount, {nullable:false})
    _count?: LanguagesCount;
}

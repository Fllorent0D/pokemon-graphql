import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ability_changelog_proseCreateNestedManyWithoutLanguagesInput } from '../ability-changelog-prose/ability-changelog-prose-create-nested-many-without-languages.input';
import { ability_flavor_textCreateNestedManyWithoutLanguagesInput } from '../ability-flavor-text/ability-flavor-text-create-nested-many-without-languages.input';
import { ability_namesCreateNestedManyWithoutLanguagesInput } from '../ability-names/ability-names-create-nested-many-without-languages.input';
import { ability_proseCreateNestedManyWithoutLanguagesInput } from '../ability-prose/ability-prose-create-nested-many-without-languages.input';
import { berry_firmness_namesCreateNestedManyWithoutLanguagesInput } from '../berry-firmness-names/berry-firmness-names-create-nested-many-without-languages.input';
import { contest_effect_proseCreateNestedManyWithoutLanguagesInput } from '../contest-effect-prose/contest-effect-prose-create-nested-many-without-languages.input';
import { contest_type_namesCreateNestedManyWithoutLanguagesInput } from '../contest-type-names/contest-type-names-create-nested-many-without-languages.input';
import { egg_group_proseCreateNestedManyWithoutLanguagesInput } from '../egg-group-prose/egg-group-prose-create-nested-many-without-languages.input';
import { encounter_condition_proseCreateNestedManyWithoutLanguagesInput } from '../encounter-condition-prose/encounter-condition-prose-create-nested-many-without-languages.input';
import { encounter_condition_value_proseCreateNestedManyWithoutLanguagesInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-create-nested-many-without-languages.input';
import { encounter_method_proseCreateNestedManyWithoutLanguagesInput } from '../encounter-method-prose/encounter-method-prose-create-nested-many-without-languages.input';
import { evolution_trigger_proseCreateNestedManyWithoutLanguagesInput } from '../evolution-trigger-prose/evolution-trigger-prose-create-nested-many-without-languages.input';
import { generation_namesCreateNestedManyWithoutLanguagesInput } from '../generation-names/generation-names-create-nested-many-without-languages.input';
import { growth_rate_proseCreateNestedManyWithoutLanguagesInput } from '../growth-rate-prose/growth-rate-prose-create-nested-many-without-languages.input';
import { item_category_proseCreateNestedManyWithoutLanguagesInput } from '../item-category-prose/item-category-prose-create-nested-many-without-languages.input';
import { item_flag_proseCreateNestedManyWithoutLanguagesInput } from '../item-flag-prose/item-flag-prose-create-nested-many-without-languages.input';
import { item_flavor_summariesCreateNestedManyWithoutLanguagesInput } from '../item-flavor-summaries/item-flavor-summaries-create-nested-many-without-languages.input';
import { item_flavor_textCreateNestedManyWithoutLanguagesInput } from '../item-flavor-text/item-flavor-text-create-nested-many-without-languages.input';
import { item_fling_effect_proseCreateNestedManyWithoutLanguagesInput } from '../item-fling-effect-prose/item-fling-effect-prose-create-nested-many-without-languages.input';
import { item_namesCreateNestedManyWithoutLanguagesInput } from '../item-names/item-names-create-nested-many-without-languages.input';
import { item_pocket_namesCreateNestedManyWithoutLanguagesInput } from '../item-pocket-names/item-pocket-names-create-nested-many-without-languages.input';
import { item_proseCreateNestedManyWithoutLanguagesInput } from '../item-prose/item-prose-create-nested-many-without-languages.input';
import { language_namesCreateNestedManyWithoutLanguages_language_names_local_language_idTolanguagesInput } from '../language-names/language-names-create-nested-many-without-languages-language-names-local-language-id-tolanguages.input';
import { language_namesCreateNestedManyWithoutLanguages_language_names_language_idTolanguagesInput } from '../language-names/language-names-create-nested-many-without-languages-language-names-language-id-tolanguages.input';
import { location_area_proseCreateNestedManyWithoutLanguagesInput } from '../location-area-prose/location-area-prose-create-nested-many-without-languages.input';
import { location_namesCreateNestedManyWithoutLanguagesInput } from '../location-names/location-names-create-nested-many-without-languages.input';
import { move_battle_style_proseCreateNestedManyWithoutLanguagesInput } from '../move-battle-style-prose/move-battle-style-prose-create-nested-many-without-languages.input';
import { move_damage_class_proseCreateNestedManyWithoutLanguagesInput } from '../move-damage-class-prose/move-damage-class-prose-create-nested-many-without-languages.input';
import { move_effect_changelog_proseCreateNestedManyWithoutLanguagesInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-create-nested-many-without-languages.input';
import { move_effect_proseCreateNestedManyWithoutLanguagesInput } from '../move-effect-prose/move-effect-prose-create-nested-many-without-languages.input';
import { move_flag_proseCreateNestedManyWithoutLanguagesInput } from '../move-flag-prose/move-flag-prose-create-nested-many-without-languages.input';
import { move_flavor_summariesCreateNestedManyWithoutLanguagesInput } from '../move-flavor-summaries/move-flavor-summaries-create-nested-many-without-languages.input';
import { move_flavor_textCreateNestedManyWithoutLanguagesInput } from '../move-flavor-text/move-flavor-text-create-nested-many-without-languages.input';
import { move_meta_ailment_namesCreateNestedManyWithoutLanguagesInput } from '../move-meta-ailment-names/move-meta-ailment-names-create-nested-many-without-languages.input';
import { move_meta_category_proseCreateNestedManyWithoutLanguagesInput } from '../move-meta-category-prose/move-meta-category-prose-create-nested-many-without-languages.input';
import { move_namesCreateNestedManyWithoutLanguagesInput } from '../move-names/move-names-create-nested-many-without-languages.input';
import { move_target_proseCreateNestedManyWithoutLanguagesInput } from '../move-target-prose/move-target-prose-create-nested-many-without-languages.input';
import { nature_namesCreateNestedManyWithoutLanguagesInput } from '../nature-names/nature-names-create-nested-many-without-languages.input';
import { pokeathlon_stat_namesCreateNestedManyWithoutLanguagesInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-create-nested-many-without-languages.input';
import { pokedex_proseCreateNestedManyWithoutLanguagesInput } from '../pokedex-prose/pokedex-prose-create-nested-many-without-languages.input';
import { pokemon_color_namesCreateNestedManyWithoutLanguagesInput } from '../pokemon-color-names/pokemon-color-names-create-nested-many-without-languages.input';
import { pokemon_form_namesCreateNestedManyWithoutLanguagesInput } from '../pokemon-form-names/pokemon-form-names-create-nested-many-without-languages.input';
import { pokemon_habitat_namesCreateNestedManyWithoutLanguagesInput } from '../pokemon-habitat-names/pokemon-habitat-names-create-nested-many-without-languages.input';
import { pokemon_move_method_proseCreateNestedManyWithoutLanguagesInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-create-nested-many-without-languages.input';
import { pokemon_shape_proseCreateNestedManyWithoutLanguagesInput } from '../pokemon-shape-prose/pokemon-shape-prose-create-nested-many-without-languages.input';
import { pokemon_species_flavor_summariesCreateNestedManyWithoutLanguagesInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-create-nested-many-without-languages.input';
import { pokemon_species_flavor_textCreateNestedManyWithoutLanguagesInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-create-nested-many-without-languages.input';
import { pokemon_species_namesCreateNestedManyWithoutLanguagesInput } from '../pokemon-species-names/pokemon-species-names-create-nested-many-without-languages.input';
import { pokemon_species_proseCreateNestedManyWithoutLanguagesInput } from '../pokemon-species-prose/pokemon-species-prose-create-nested-many-without-languages.input';
import { region_namesCreateNestedManyWithoutLanguagesInput } from '../region-names/region-names-create-nested-many-without-languages.input';
import { stat_hint_namesCreateNestedManyWithoutLanguagesInput } from '../stat-hint-names/stat-hint-names-create-nested-many-without-languages.input';
import { stat_namesCreateNestedManyWithoutLanguagesInput } from '../stat-names/stat-names-create-nested-many-without-languages.input';
import { super_contest_effect_proseCreateNestedManyWithoutLanguagesInput } from '../super-contest-effect-prose/super-contest-effect-prose-create-nested-many-without-languages.input';
import { type_namesCreateNestedManyWithoutLanguagesInput } from '../type-names/type-names-create-nested-many-without-languages.input';
import { version_namesCreateNestedManyWithoutLanguagesInput } from '../version-names/version-names-create-nested-many-without-languages.input';

@InputType()
export class languagesCreateInput {

    @Field(() => String, {nullable:false})
    iso639!: string;

    @Field(() => String, {nullable:false})
    iso3166!: string;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    official!: boolean;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => ability_changelog_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => ability_flavor_textCreateNestedManyWithoutLanguagesInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textCreateNestedManyWithoutLanguagesInput;

    @Field(() => ability_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    ability_names?: ability_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => ability_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    ability_prose?: ability_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => berry_firmness_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => contest_effect_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    contest_effect_prose?: contest_effect_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => contest_type_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    contest_type_names?: contest_type_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => egg_group_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    egg_group_prose?: egg_group_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => encounter_condition_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => encounter_condition_value_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => encounter_method_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => evolution_trigger_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => generation_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    generation_names?: generation_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => growth_rate_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_category_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_category_prose?: item_category_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_flag_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_flag_prose?: item_flag_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_flavor_summariesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_flavor_textCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_flavor_text?: item_flavor_textCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_fling_effect_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_names?: item_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_pocket_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_pocket_names?: item_pocket_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_prose?: item_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => language_namesCreateNestedManyWithoutLanguages_language_names_local_language_idTolanguagesInput, {nullable:true})
    language_names_language_names_local_language_idTolanguages?: language_namesCreateNestedManyWithoutLanguages_language_names_local_language_idTolanguagesInput;

    @Field(() => language_namesCreateNestedManyWithoutLanguages_language_names_language_idTolanguagesInput, {nullable:true})
    language_names_language_names_language_idTolanguages?: language_namesCreateNestedManyWithoutLanguages_language_names_language_idTolanguagesInput;

    @Field(() => location_area_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    location_area_prose?: location_area_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => location_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    location_names?: location_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_battle_style_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_damage_class_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_effect_changelog_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_effect_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_effect_prose?: move_effect_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_flag_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_flag_prose?: move_flag_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_flavor_summariesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_flavor_summaries?: move_flavor_summariesCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_flavor_textCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_flavor_text?: move_flavor_textCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_meta_ailment_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_meta_category_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_names?: move_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_target_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_target_prose?: move_target_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => nature_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    nature_names?: nature_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokeathlon_stat_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokedex_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokedex_prose?: pokedex_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_color_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_form_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_habitat_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_move_method_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_shape_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_species_flavor_summariesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_species_flavor_textCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_species_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_species_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => region_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    region_names?: region_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => stat_hint_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    stat_hint_names?: stat_hint_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => stat_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    stat_names?: stat_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => super_contest_effect_proseCreateNestedManyWithoutLanguagesInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseCreateNestedManyWithoutLanguagesInput;

    @Field(() => type_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    type_names?: type_namesCreateNestedManyWithoutLanguagesInput;

    @Field(() => version_namesCreateNestedManyWithoutLanguagesInput, {nullable:true})
    version_names?: version_namesCreateNestedManyWithoutLanguagesInput;
}

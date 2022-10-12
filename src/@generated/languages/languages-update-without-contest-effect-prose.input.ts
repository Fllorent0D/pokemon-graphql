import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { ability_changelog_proseUpdateManyWithoutLanguagesNestedInput } from '../ability-changelog-prose/ability-changelog-prose-update-many-without-languages-nested.input';
import { ability_flavor_textUpdateManyWithoutLanguagesNestedInput } from '../ability-flavor-text/ability-flavor-text-update-many-without-languages-nested.input';
import { ability_namesUpdateManyWithoutLanguagesNestedInput } from '../ability-names/ability-names-update-many-without-languages-nested.input';
import { ability_proseUpdateManyWithoutLanguagesNestedInput } from '../ability-prose/ability-prose-update-many-without-languages-nested.input';
import { berry_firmness_namesUpdateManyWithoutLanguagesNestedInput } from '../berry-firmness-names/berry-firmness-names-update-many-without-languages-nested.input';
import { contest_type_namesUpdateManyWithoutLanguagesNestedInput } from '../contest-type-names/contest-type-names-update-many-without-languages-nested.input';
import { egg_group_proseUpdateManyWithoutLanguagesNestedInput } from '../egg-group-prose/egg-group-prose-update-many-without-languages-nested.input';
import { encounter_condition_proseUpdateManyWithoutLanguagesNestedInput } from '../encounter-condition-prose/encounter-condition-prose-update-many-without-languages-nested.input';
import { encounter_condition_value_proseUpdateManyWithoutLanguagesNestedInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-update-many-without-languages-nested.input';
import { encounter_method_proseUpdateManyWithoutLanguagesNestedInput } from '../encounter-method-prose/encounter-method-prose-update-many-without-languages-nested.input';
import { evolution_trigger_proseUpdateManyWithoutLanguagesNestedInput } from '../evolution-trigger-prose/evolution-trigger-prose-update-many-without-languages-nested.input';
import { generation_namesUpdateManyWithoutLanguagesNestedInput } from '../generation-names/generation-names-update-many-without-languages-nested.input';
import { growth_rate_proseUpdateManyWithoutLanguagesNestedInput } from '../growth-rate-prose/growth-rate-prose-update-many-without-languages-nested.input';
import { item_category_proseUpdateManyWithoutLanguagesNestedInput } from '../item-category-prose/item-category-prose-update-many-without-languages-nested.input';
import { item_flag_proseUpdateManyWithoutLanguagesNestedInput } from '../item-flag-prose/item-flag-prose-update-many-without-languages-nested.input';
import { item_flavor_summariesUpdateManyWithoutLanguagesNestedInput } from '../item-flavor-summaries/item-flavor-summaries-update-many-without-languages-nested.input';
import { item_flavor_textUpdateManyWithoutLanguagesNestedInput } from '../item-flavor-text/item-flavor-text-update-many-without-languages-nested.input';
import { item_fling_effect_proseUpdateManyWithoutLanguagesNestedInput } from '../item-fling-effect-prose/item-fling-effect-prose-update-many-without-languages-nested.input';
import { item_namesUpdateManyWithoutLanguagesNestedInput } from '../item-names/item-names-update-many-without-languages-nested.input';
import { item_pocket_namesUpdateManyWithoutLanguagesNestedInput } from '../item-pocket-names/item-pocket-names-update-many-without-languages-nested.input';
import { item_proseUpdateManyWithoutLanguagesNestedInput } from '../item-prose/item-prose-update-many-without-languages-nested.input';
import { language_namesUpdateManyWithoutLanguages_language_names_local_language_idTolanguagesNestedInput } from '../language-names/language-names-update-many-without-languages-language-names-local-language-id-tolanguages-nested.input';
import { language_namesUpdateManyWithoutLanguages_language_names_language_idTolanguagesNestedInput } from '../language-names/language-names-update-many-without-languages-language-names-language-id-tolanguages-nested.input';
import { location_area_proseUpdateManyWithoutLanguagesNestedInput } from '../location-area-prose/location-area-prose-update-many-without-languages-nested.input';
import { location_namesUpdateManyWithoutLanguagesNestedInput } from '../location-names/location-names-update-many-without-languages-nested.input';
import { move_battle_style_proseUpdateManyWithoutLanguagesNestedInput } from '../move-battle-style-prose/move-battle-style-prose-update-many-without-languages-nested.input';
import { move_damage_class_proseUpdateManyWithoutLanguagesNestedInput } from '../move-damage-class-prose/move-damage-class-prose-update-many-without-languages-nested.input';
import { move_effect_changelog_proseUpdateManyWithoutLanguagesNestedInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-update-many-without-languages-nested.input';
import { move_effect_proseUpdateManyWithoutLanguagesNestedInput } from '../move-effect-prose/move-effect-prose-update-many-without-languages-nested.input';
import { move_flag_proseUpdateManyWithoutLanguagesNestedInput } from '../move-flag-prose/move-flag-prose-update-many-without-languages-nested.input';
import { move_flavor_summariesUpdateManyWithoutLanguagesNestedInput } from '../move-flavor-summaries/move-flavor-summaries-update-many-without-languages-nested.input';
import { move_flavor_textUpdateManyWithoutLanguagesNestedInput } from '../move-flavor-text/move-flavor-text-update-many-without-languages-nested.input';
import { move_meta_ailment_namesUpdateManyWithoutLanguagesNestedInput } from '../move-meta-ailment-names/move-meta-ailment-names-update-many-without-languages-nested.input';
import { move_meta_category_proseUpdateManyWithoutLanguagesNestedInput } from '../move-meta-category-prose/move-meta-category-prose-update-many-without-languages-nested.input';
import { move_namesUpdateManyWithoutLanguagesNestedInput } from '../move-names/move-names-update-many-without-languages-nested.input';
import { move_target_proseUpdateManyWithoutLanguagesNestedInput } from '../move-target-prose/move-target-prose-update-many-without-languages-nested.input';
import { nature_namesUpdateManyWithoutLanguagesNestedInput } from '../nature-names/nature-names-update-many-without-languages-nested.input';
import { pokeathlon_stat_namesUpdateManyWithoutLanguagesNestedInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-update-many-without-languages-nested.input';
import { pokedex_proseUpdateManyWithoutLanguagesNestedInput } from '../pokedex-prose/pokedex-prose-update-many-without-languages-nested.input';
import { pokemon_color_namesUpdateManyWithoutLanguagesNestedInput } from '../pokemon-color-names/pokemon-color-names-update-many-without-languages-nested.input';
import { pokemon_form_namesUpdateManyWithoutLanguagesNestedInput } from '../pokemon-form-names/pokemon-form-names-update-many-without-languages-nested.input';
import { pokemon_habitat_namesUpdateManyWithoutLanguagesNestedInput } from '../pokemon-habitat-names/pokemon-habitat-names-update-many-without-languages-nested.input';
import { pokemon_move_method_proseUpdateManyWithoutLanguagesNestedInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-update-many-without-languages-nested.input';
import { pokemon_shape_proseUpdateManyWithoutLanguagesNestedInput } from '../pokemon-shape-prose/pokemon-shape-prose-update-many-without-languages-nested.input';
import { pokemon_species_flavor_summariesUpdateManyWithoutLanguagesNestedInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-update-many-without-languages-nested.input';
import { pokemon_species_flavor_textUpdateManyWithoutLanguagesNestedInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-update-many-without-languages-nested.input';
import { pokemon_species_namesUpdateManyWithoutLanguagesNestedInput } from '../pokemon-species-names/pokemon-species-names-update-many-without-languages-nested.input';
import { pokemon_species_proseUpdateManyWithoutLanguagesNestedInput } from '../pokemon-species-prose/pokemon-species-prose-update-many-without-languages-nested.input';
import { region_namesUpdateManyWithoutLanguagesNestedInput } from '../region-names/region-names-update-many-without-languages-nested.input';
import { stat_hint_namesUpdateManyWithoutLanguagesNestedInput } from '../stat-hint-names/stat-hint-names-update-many-without-languages-nested.input';
import { stat_namesUpdateManyWithoutLanguagesNestedInput } from '../stat-names/stat-names-update-many-without-languages-nested.input';
import { super_contest_effect_proseUpdateManyWithoutLanguagesNestedInput } from '../super-contest-effect-prose/super-contest-effect-prose-update-many-without-languages-nested.input';
import { type_namesUpdateManyWithoutLanguagesNestedInput } from '../type-names/type-names-update-many-without-languages-nested.input';
import { version_namesUpdateManyWithoutLanguagesNestedInput } from '../version-names/version-names-update-many-without-languages-nested.input';

@InputType()
export class languagesUpdateWithoutContest_effect_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    iso639?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    iso3166?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    official?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    order?: NullableIntFieldUpdateOperationsInput;

    @Field(() => ability_changelog_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => ability_flavor_textUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUpdateManyWithoutLanguagesNestedInput;

    @Field(() => ability_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    ability_names?: ability_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => ability_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    ability_prose?: ability_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => berry_firmness_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => contest_type_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    contest_type_names?: contest_type_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => egg_group_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    egg_group_prose?: egg_group_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => encounter_condition_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => encounter_condition_value_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => encounter_method_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => evolution_trigger_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => generation_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    generation_names?: generation_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => growth_rate_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_category_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_category_prose?: item_category_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_flag_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_flag_prose?: item_flag_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_flavor_summariesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_flavor_textUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_flavor_text?: item_flavor_textUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_fling_effect_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_names?: item_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_pocket_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_pocket_names?: item_pocket_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_prose?: item_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => language_namesUpdateManyWithoutLanguages_language_names_local_language_idTolanguagesNestedInput, {nullable:true})
    language_names_language_names_local_language_idTolanguages?: language_namesUpdateManyWithoutLanguages_language_names_local_language_idTolanguagesNestedInput;

    @Field(() => language_namesUpdateManyWithoutLanguages_language_names_language_idTolanguagesNestedInput, {nullable:true})
    language_names_language_names_language_idTolanguages?: language_namesUpdateManyWithoutLanguages_language_names_language_idTolanguagesNestedInput;

    @Field(() => location_area_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    location_area_prose?: location_area_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => location_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    location_names?: location_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_battle_style_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_damage_class_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_effect_changelog_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_effect_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_effect_prose?: move_effect_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_flag_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_flag_prose?: move_flag_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_flavor_summariesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_flavor_summaries?: move_flavor_summariesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_flavor_textUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_flavor_text?: move_flavor_textUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_meta_ailment_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_meta_category_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_names?: move_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_target_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_target_prose?: move_target_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => nature_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    nature_names?: nature_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokeathlon_stat_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokedex_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokedex_prose?: pokedex_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_color_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_form_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_habitat_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_move_method_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_shape_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_species_flavor_summariesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_species_flavor_textUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_species_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_species_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => region_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    region_names?: region_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => stat_hint_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    stat_hint_names?: stat_hint_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => stat_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    stat_names?: stat_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => super_contest_effect_proseUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseUpdateManyWithoutLanguagesNestedInput;

    @Field(() => type_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    type_names?: type_namesUpdateManyWithoutLanguagesNestedInput;

    @Field(() => version_namesUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    version_names?: version_namesUpdateManyWithoutLanguagesNestedInput;
}

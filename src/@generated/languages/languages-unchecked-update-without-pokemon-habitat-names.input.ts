import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { ability_changelog_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../ability-changelog-prose/ability-changelog-prose-unchecked-update-many-without-languages-nested.input';
import { ability_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput } from '../ability-flavor-text/ability-flavor-text-unchecked-update-many-without-languages-nested.input';
import { ability_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../ability-names/ability-names-unchecked-update-many-without-languages-nested.input';
import { ability_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../ability-prose/ability-prose-unchecked-update-many-without-languages-nested.input';
import { berry_firmness_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../berry-firmness-names/berry-firmness-names-unchecked-update-many-without-languages-nested.input';
import { contest_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../contest-effect-prose/contest-effect-prose-unchecked-update-many-without-languages-nested.input';
import { contest_type_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../contest-type-names/contest-type-names-unchecked-update-many-without-languages-nested.input';
import { egg_group_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../egg-group-prose/egg-group-prose-unchecked-update-many-without-languages-nested.input';
import { encounter_condition_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../encounter-condition-prose/encounter-condition-prose-unchecked-update-many-without-languages-nested.input';
import { encounter_condition_value_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-unchecked-update-many-without-languages-nested.input';
import { encounter_method_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../encounter-method-prose/encounter-method-prose-unchecked-update-many-without-languages-nested.input';
import { evolution_trigger_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../evolution-trigger-prose/evolution-trigger-prose-unchecked-update-many-without-languages-nested.input';
import { generation_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../generation-names/generation-names-unchecked-update-many-without-languages-nested.input';
import { growth_rate_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../growth-rate-prose/growth-rate-prose-unchecked-update-many-without-languages-nested.input';
import { item_category_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../item-category-prose/item-category-prose-unchecked-update-many-without-languages-nested.input';
import { item_flag_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../item-flag-prose/item-flag-prose-unchecked-update-many-without-languages-nested.input';
import { item_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../item-flavor-summaries/item-flavor-summaries-unchecked-update-many-without-languages-nested.input';
import { item_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput } from '../item-flavor-text/item-flavor-text-unchecked-update-many-without-languages-nested.input';
import { item_fling_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../item-fling-effect-prose/item-fling-effect-prose-unchecked-update-many-without-languages-nested.input';
import { item_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../item-names/item-names-unchecked-update-many-without-languages-nested.input';
import { item_pocket_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../item-pocket-names/item-pocket-names-unchecked-update-many-without-languages-nested.input';
import { item_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../item-prose/item-prose-unchecked-update-many-without-languages-nested.input';
import { language_namesUncheckedUpdateManyWithoutLanguages_language_names_local_language_idTolanguagesNestedInput } from '../language-names/language-names-unchecked-update-many-without-languages-language-names-local-language-id-tolanguages-nested.input';
import { language_namesUncheckedUpdateManyWithoutLanguages_language_names_language_idTolanguagesNestedInput } from '../language-names/language-names-unchecked-update-many-without-languages-language-names-language-id-tolanguages-nested.input';
import { location_area_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../location-area-prose/location-area-prose-unchecked-update-many-without-languages-nested.input';
import { location_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../location-names/location-names-unchecked-update-many-without-languages-nested.input';
import { move_battle_style_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-battle-style-prose/move-battle-style-prose-unchecked-update-many-without-languages-nested.input';
import { move_damage_class_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-damage-class-prose/move-damage-class-prose-unchecked-update-many-without-languages-nested.input';
import { move_effect_changelog_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-unchecked-update-many-without-languages-nested.input';
import { move_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-effect-prose/move-effect-prose-unchecked-update-many-without-languages-nested.input';
import { move_flag_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-flag-prose/move-flag-prose-unchecked-update-many-without-languages-nested.input';
import { move_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-flavor-summaries/move-flavor-summaries-unchecked-update-many-without-languages-nested.input';
import { move_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-flavor-text/move-flavor-text-unchecked-update-many-without-languages-nested.input';
import { move_meta_ailment_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-meta-ailment-names/move-meta-ailment-names-unchecked-update-many-without-languages-nested.input';
import { move_meta_category_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-meta-category-prose/move-meta-category-prose-unchecked-update-many-without-languages-nested.input';
import { move_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-names/move-names-unchecked-update-many-without-languages-nested.input';
import { move_target_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../move-target-prose/move-target-prose-unchecked-update-many-without-languages-nested.input';
import { nature_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../nature-names/nature-names-unchecked-update-many-without-languages-nested.input';
import { pokeathlon_stat_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-unchecked-update-many-without-languages-nested.input';
import { pokedex_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokedex-prose/pokedex-prose-unchecked-update-many-without-languages-nested.input';
import { pokemon_color_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokemon-color-names/pokemon-color-names-unchecked-update-many-without-languages-nested.input';
import { pokemon_form_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokemon-form-names/pokemon-form-names-unchecked-update-many-without-languages-nested.input';
import { pokemon_move_method_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-unchecked-update-many-without-languages-nested.input';
import { pokemon_shape_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokemon-shape-prose/pokemon-shape-prose-unchecked-update-many-without-languages-nested.input';
import { pokemon_species_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-unchecked-update-many-without-languages-nested.input';
import { pokemon_species_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-unchecked-update-many-without-languages-nested.input';
import { pokemon_species_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokemon-species-names/pokemon-species-names-unchecked-update-many-without-languages-nested.input';
import { pokemon_species_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../pokemon-species-prose/pokemon-species-prose-unchecked-update-many-without-languages-nested.input';
import { region_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../region-names/region-names-unchecked-update-many-without-languages-nested.input';
import { stat_hint_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../stat-hint-names/stat-hint-names-unchecked-update-many-without-languages-nested.input';
import { stat_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../stat-names/stat-names-unchecked-update-many-without-languages-nested.input';
import { super_contest_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput } from '../super-contest-effect-prose/super-contest-effect-prose-unchecked-update-many-without-languages-nested.input';
import { type_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../type-names/type-names-unchecked-update-many-without-languages-nested.input';
import { version_namesUncheckedUpdateManyWithoutLanguagesNestedInput } from '../version-names/version-names-unchecked-update-many-without-languages-nested.input';

@InputType()
export class languagesUncheckedUpdateWithoutPokemon_habitat_namesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => ability_changelog_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => ability_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => ability_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    ability_names?: ability_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => ability_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    ability_prose?: ability_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => berry_firmness_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => contest_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    contest_effect_prose?: contest_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => contest_type_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    contest_type_names?: contest_type_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => egg_group_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    egg_group_prose?: egg_group_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => encounter_condition_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => encounter_condition_value_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => encounter_method_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => evolution_trigger_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => generation_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    generation_names?: generation_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => growth_rate_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_category_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_category_prose?: item_category_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_flag_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_flag_prose?: item_flag_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_flavor_text?: item_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_fling_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_names?: item_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_pocket_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_pocket_names?: item_pocket_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => item_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    item_prose?: item_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => language_namesUncheckedUpdateManyWithoutLanguages_language_names_local_language_idTolanguagesNestedInput, {nullable:true})
    language_names_language_names_local_language_idTolanguages?: language_namesUncheckedUpdateManyWithoutLanguages_language_names_local_language_idTolanguagesNestedInput;

    @Field(() => language_namesUncheckedUpdateManyWithoutLanguages_language_names_language_idTolanguagesNestedInput, {nullable:true})
    language_names_language_names_language_idTolanguages?: language_namesUncheckedUpdateManyWithoutLanguages_language_names_language_idTolanguagesNestedInput;

    @Field(() => location_area_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    location_area_prose?: location_area_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => location_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    location_names?: location_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_battle_style_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_damage_class_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_effect_changelog_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_effect_prose?: move_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_flag_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_flag_prose?: move_flag_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_flavor_summaries?: move_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_flavor_text?: move_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_meta_ailment_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_meta_category_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_names?: move_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => move_target_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    move_target_prose?: move_target_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => nature_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    nature_names?: nature_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokeathlon_stat_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokedex_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokedex_prose?: pokedex_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_color_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_form_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_move_method_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_shape_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_species_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_species_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_species_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => pokemon_species_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => region_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    region_names?: region_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => stat_hint_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    stat_hint_names?: stat_hint_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => stat_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    stat_names?: stat_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => super_contest_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => type_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    type_names?: type_namesUncheckedUpdateManyWithoutLanguagesNestedInput;

    @Field(() => version_namesUncheckedUpdateManyWithoutLanguagesNestedInput, {nullable:true})
    version_names?: version_namesUncheckedUpdateManyWithoutLanguagesNestedInput;
}

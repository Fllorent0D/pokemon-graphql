import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ability_changelog_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../ability-changelog-prose/ability-changelog-prose-unchecked-create-nested-many-without-languages.input';
import { ability_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput } from '../ability-flavor-text/ability-flavor-text-unchecked-create-nested-many-without-languages.input';
import { ability_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../ability-names/ability-names-unchecked-create-nested-many-without-languages.input';
import { ability_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../ability-prose/ability-prose-unchecked-create-nested-many-without-languages.input';
import { berry_firmness_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../berry-firmness-names/berry-firmness-names-unchecked-create-nested-many-without-languages.input';
import { contest_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../contest-effect-prose/contest-effect-prose-unchecked-create-nested-many-without-languages.input';
import { contest_type_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../contest-type-names/contest-type-names-unchecked-create-nested-many-without-languages.input';
import { egg_group_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../egg-group-prose/egg-group-prose-unchecked-create-nested-many-without-languages.input';
import { encounter_condition_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../encounter-condition-prose/encounter-condition-prose-unchecked-create-nested-many-without-languages.input';
import { encounter_condition_value_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-unchecked-create-nested-many-without-languages.input';
import { encounter_method_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../encounter-method-prose/encounter-method-prose-unchecked-create-nested-many-without-languages.input';
import { evolution_trigger_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../evolution-trigger-prose/evolution-trigger-prose-unchecked-create-nested-many-without-languages.input';
import { generation_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../generation-names/generation-names-unchecked-create-nested-many-without-languages.input';
import { growth_rate_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../growth-rate-prose/growth-rate-prose-unchecked-create-nested-many-without-languages.input';
import { item_category_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../item-category-prose/item-category-prose-unchecked-create-nested-many-without-languages.input';
import { item_flag_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../item-flag-prose/item-flag-prose-unchecked-create-nested-many-without-languages.input';
import { item_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput } from '../item-flavor-summaries/item-flavor-summaries-unchecked-create-nested-many-without-languages.input';
import { item_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput } from '../item-flavor-text/item-flavor-text-unchecked-create-nested-many-without-languages.input';
import { item_fling_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../item-fling-effect-prose/item-fling-effect-prose-unchecked-create-nested-many-without-languages.input';
import { item_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../item-names/item-names-unchecked-create-nested-many-without-languages.input';
import { item_pocket_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../item-pocket-names/item-pocket-names-unchecked-create-nested-many-without-languages.input';
import { item_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../item-prose/item-prose-unchecked-create-nested-many-without-languages.input';
import { language_namesUncheckedCreateNestedManyWithoutLanguages_language_names_local_language_idTolanguagesInput } from '../language-names/language-names-unchecked-create-nested-many-without-languages-language-names-local-language-id-tolanguages.input';
import { language_namesUncheckedCreateNestedManyWithoutLanguages_language_names_language_idTolanguagesInput } from '../language-names/language-names-unchecked-create-nested-many-without-languages-language-names-language-id-tolanguages.input';
import { location_area_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../location-area-prose/location-area-prose-unchecked-create-nested-many-without-languages.input';
import { location_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../location-names/location-names-unchecked-create-nested-many-without-languages.input';
import { move_battle_style_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-battle-style-prose/move-battle-style-prose-unchecked-create-nested-many-without-languages.input';
import { move_damage_class_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-damage-class-prose/move-damage-class-prose-unchecked-create-nested-many-without-languages.input';
import { move_effect_changelog_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-unchecked-create-nested-many-without-languages.input';
import { move_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-effect-prose/move-effect-prose-unchecked-create-nested-many-without-languages.input';
import { move_flag_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-flag-prose/move-flag-prose-unchecked-create-nested-many-without-languages.input';
import { move_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-flavor-summaries/move-flavor-summaries-unchecked-create-nested-many-without-languages.input';
import { move_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-flavor-text/move-flavor-text-unchecked-create-nested-many-without-languages.input';
import { move_meta_ailment_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-meta-ailment-names/move-meta-ailment-names-unchecked-create-nested-many-without-languages.input';
import { move_meta_category_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-meta-category-prose/move-meta-category-prose-unchecked-create-nested-many-without-languages.input';
import { move_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-names/move-names-unchecked-create-nested-many-without-languages.input';
import { move_target_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../move-target-prose/move-target-prose-unchecked-create-nested-many-without-languages.input';
import { nature_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../nature-names/nature-names-unchecked-create-nested-many-without-languages.input';
import { pokeathlon_stat_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-unchecked-create-nested-many-without-languages.input';
import { pokedex_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokedex-prose/pokedex-prose-unchecked-create-nested-many-without-languages.input';
import { pokemon_color_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-color-names/pokemon-color-names-unchecked-create-nested-many-without-languages.input';
import { pokemon_form_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-form-names/pokemon-form-names-unchecked-create-nested-many-without-languages.input';
import { pokemon_habitat_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-habitat-names/pokemon-habitat-names-unchecked-create-nested-many-without-languages.input';
import { pokemon_move_method_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-unchecked-create-nested-many-without-languages.input';
import { pokemon_shape_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-shape-prose/pokemon-shape-prose-unchecked-create-nested-many-without-languages.input';
import { pokemon_species_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-unchecked-create-nested-many-without-languages.input';
import { pokemon_species_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-unchecked-create-nested-many-without-languages.input';
import { pokemon_species_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-species-names/pokemon-species-names-unchecked-create-nested-many-without-languages.input';
import { pokemon_species_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../pokemon-species-prose/pokemon-species-prose-unchecked-create-nested-many-without-languages.input';
import { region_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../region-names/region-names-unchecked-create-nested-many-without-languages.input';
import { stat_hint_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../stat-hint-names/stat-hint-names-unchecked-create-nested-many-without-languages.input';
import { super_contest_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput } from '../super-contest-effect-prose/super-contest-effect-prose-unchecked-create-nested-many-without-languages.input';
import { type_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../type-names/type-names-unchecked-create-nested-many-without-languages.input';
import { version_namesUncheckedCreateNestedManyWithoutLanguagesInput } from '../version-names/version-names-unchecked-create-nested-many-without-languages.input';

@InputType()
export class languagesUncheckedCreateWithoutStat_namesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => ability_changelog_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => ability_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => ability_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    ability_names?: ability_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => ability_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    ability_prose?: ability_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => berry_firmness_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => contest_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    contest_effect_prose?: contest_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => contest_type_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    contest_type_names?: contest_type_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => egg_group_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    egg_group_prose?: egg_group_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => encounter_condition_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => encounter_condition_value_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => encounter_method_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    encounter_method_prose?: encounter_method_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => evolution_trigger_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    evolution_trigger_prose?: evolution_trigger_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => generation_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    generation_names?: generation_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => growth_rate_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_category_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_category_prose?: item_category_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_flag_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_flag_prose?: item_flag_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_flavor_summaries?: item_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_flavor_text?: item_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_fling_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_fling_effect_prose?: item_fling_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_names?: item_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_pocket_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_pocket_names?: item_pocket_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => item_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    item_prose?: item_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => language_namesUncheckedCreateNestedManyWithoutLanguages_language_names_local_language_idTolanguagesInput, {nullable:true})
    language_names_language_names_local_language_idTolanguages?: language_namesUncheckedCreateNestedManyWithoutLanguages_language_names_local_language_idTolanguagesInput;

    @Field(() => language_namesUncheckedCreateNestedManyWithoutLanguages_language_names_language_idTolanguagesInput, {nullable:true})
    language_names_language_names_language_idTolanguages?: language_namesUncheckedCreateNestedManyWithoutLanguages_language_names_language_idTolanguagesInput;

    @Field(() => location_area_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    location_area_prose?: location_area_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => location_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    location_names?: location_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_battle_style_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_damage_class_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_effect_changelog_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_effect_prose?: move_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_flag_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_flag_prose?: move_flag_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_flavor_summaries?: move_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_flavor_text?: move_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_meta_ailment_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_meta_category_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_names?: move_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => move_target_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    move_target_prose?: move_target_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => nature_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    nature_names?: nature_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokeathlon_stat_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokedex_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokedex_prose?: pokedex_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_color_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_form_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_habitat_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_habitat_names?: pokemon_habitat_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_move_method_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_shape_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_shape_prose?: pokemon_shape_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_species_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_species_flavor_summaries?: pokemon_species_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_species_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_species_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_species_names?: pokemon_species_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => pokemon_species_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    pokemon_species_prose?: pokemon_species_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => region_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    region_names?: region_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => stat_hint_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    stat_hint_names?: stat_hint_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => super_contest_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    super_contest_effect_prose?: super_contest_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => type_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    type_names?: type_namesUncheckedCreateNestedManyWithoutLanguagesInput;

    @Field(() => version_namesUncheckedCreateNestedManyWithoutLanguagesInput, {nullable:true})
    version_names?: version_namesUncheckedCreateNestedManyWithoutLanguagesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Ability_changelog_proseListRelationFilter } from '../prisma/ability-changelog-prose-list-relation-filter.input';
import { Ability_flavor_textListRelationFilter } from '../prisma/ability-flavor-text-list-relation-filter.input';
import { Ability_namesListRelationFilter } from '../prisma/ability-names-list-relation-filter.input';
import { Ability_proseListRelationFilter } from '../prisma/ability-prose-list-relation-filter.input';
import { Berry_firmness_namesListRelationFilter } from '../prisma/berry-firmness-names-list-relation-filter.input';
import { Contest_effect_proseListRelationFilter } from '../prisma/contest-effect-prose-list-relation-filter.input';
import { Contest_type_namesListRelationFilter } from '../prisma/contest-type-names-list-relation-filter.input';
import { Egg_group_proseListRelationFilter } from '../prisma/egg-group-prose-list-relation-filter.input';
import { Encounter_condition_proseListRelationFilter } from '../prisma/encounter-condition-prose-list-relation-filter.input';
import { Encounter_condition_value_proseListRelationFilter } from '../prisma/encounter-condition-value-prose-list-relation-filter.input';
import { Encounter_method_proseListRelationFilter } from '../prisma/encounter-method-prose-list-relation-filter.input';
import { Evolution_trigger_proseListRelationFilter } from '../prisma/evolution-trigger-prose-list-relation-filter.input';
import { Generation_namesListRelationFilter } from '../prisma/generation-names-list-relation-filter.input';
import { Growth_rate_proseListRelationFilter } from '../prisma/growth-rate-prose-list-relation-filter.input';
import { Item_category_proseListRelationFilter } from '../prisma/item-category-prose-list-relation-filter.input';
import { Item_flag_proseListRelationFilter } from '../prisma/item-flag-prose-list-relation-filter.input';
import { Item_flavor_summariesListRelationFilter } from '../prisma/item-flavor-summaries-list-relation-filter.input';
import { Item_flavor_textListRelationFilter } from '../prisma/item-flavor-text-list-relation-filter.input';
import { Item_fling_effect_proseListRelationFilter } from '../prisma/item-fling-effect-prose-list-relation-filter.input';
import { Item_namesListRelationFilter } from '../prisma/item-names-list-relation-filter.input';
import { Item_pocket_namesListRelationFilter } from '../prisma/item-pocket-names-list-relation-filter.input';
import { Item_proseListRelationFilter } from '../prisma/item-prose-list-relation-filter.input';
import { Language_namesListRelationFilter } from '../prisma/language-names-list-relation-filter.input';
import { Location_area_proseListRelationFilter } from '../prisma/location-area-prose-list-relation-filter.input';
import { Location_namesListRelationFilter } from '../prisma/location-names-list-relation-filter.input';
import { Move_battle_style_proseListRelationFilter } from '../prisma/move-battle-style-prose-list-relation-filter.input';
import { Move_damage_class_proseListRelationFilter } from '../prisma/move-damage-class-prose-list-relation-filter.input';
import { Move_effect_changelog_proseListRelationFilter } from '../prisma/move-effect-changelog-prose-list-relation-filter.input';
import { Move_effect_proseListRelationFilter } from '../prisma/move-effect-prose-list-relation-filter.input';
import { Move_flag_proseListRelationFilter } from '../prisma/move-flag-prose-list-relation-filter.input';
import { Move_flavor_summariesListRelationFilter } from '../prisma/move-flavor-summaries-list-relation-filter.input';
import { Move_flavor_textListRelationFilter } from '../prisma/move-flavor-text-list-relation-filter.input';
import { Move_meta_ailment_namesListRelationFilter } from '../prisma/move-meta-ailment-names-list-relation-filter.input';
import { Move_meta_category_proseListRelationFilter } from '../prisma/move-meta-category-prose-list-relation-filter.input';
import { Move_namesListRelationFilter } from '../prisma/move-names-list-relation-filter.input';
import { Move_target_proseListRelationFilter } from '../prisma/move-target-prose-list-relation-filter.input';
import { Nature_namesListRelationFilter } from '../prisma/nature-names-list-relation-filter.input';
import { Pokeathlon_stat_namesListRelationFilter } from '../prisma/pokeathlon-stat-names-list-relation-filter.input';
import { Pokedex_proseListRelationFilter } from '../prisma/pokedex-prose-list-relation-filter.input';
import { Pokemon_color_namesListRelationFilter } from '../prisma/pokemon-color-names-list-relation-filter.input';
import { Pokemon_form_namesListRelationFilter } from '../prisma/pokemon-form-names-list-relation-filter.input';
import { Pokemon_habitat_namesListRelationFilter } from '../prisma/pokemon-habitat-names-list-relation-filter.input';
import { Pokemon_move_method_proseListRelationFilter } from '../prisma/pokemon-move-method-prose-list-relation-filter.input';
import { Pokemon_shape_proseListRelationFilter } from '../prisma/pokemon-shape-prose-list-relation-filter.input';
import { Pokemon_species_flavor_summariesListRelationFilter } from '../prisma/pokemon-species-flavor-summaries-list-relation-filter.input';
import { Pokemon_species_flavor_textListRelationFilter } from '../prisma/pokemon-species-flavor-text-list-relation-filter.input';
import { Pokemon_species_namesListRelationFilter } from '../prisma/pokemon-species-names-list-relation-filter.input';
import { Pokemon_species_proseListRelationFilter } from '../prisma/pokemon-species-prose-list-relation-filter.input';
import { Region_namesListRelationFilter } from '../prisma/region-names-list-relation-filter.input';
import { Stat_hint_namesListRelationFilter } from '../prisma/stat-hint-names-list-relation-filter.input';
import { Stat_namesListRelationFilter } from '../prisma/stat-names-list-relation-filter.input';
import { Super_contest_effect_proseListRelationFilter } from '../prisma/super-contest-effect-prose-list-relation-filter.input';
import { Type_namesListRelationFilter } from '../prisma/type-names-list-relation-filter.input';
import { Version_namesListRelationFilter } from '../prisma/version-names-list-relation-filter.input';

@InputType()
export class languagesWhereInput {

    @Field(() => [languagesWhereInput], {nullable:true})
    AND?: Array<languagesWhereInput>;

    @Field(() => [languagesWhereInput], {nullable:true})
    OR?: Array<languagesWhereInput>;

    @Field(() => [languagesWhereInput], {nullable:true})
    NOT?: Array<languagesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    iso639?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    iso3166?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    official?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    order?: IntNullableFilter;

    @Field(() => Ability_changelog_proseListRelationFilter, {nullable:true})
    ability_changelog_prose?: Ability_changelog_proseListRelationFilter;

    @Field(() => Ability_flavor_textListRelationFilter, {nullable:true})
    ability_flavor_text?: Ability_flavor_textListRelationFilter;

    @Field(() => Ability_namesListRelationFilter, {nullable:true})
    ability_names?: Ability_namesListRelationFilter;

    @Field(() => Ability_proseListRelationFilter, {nullable:true})
    ability_prose?: Ability_proseListRelationFilter;

    @Field(() => Berry_firmness_namesListRelationFilter, {nullable:true})
    berry_firmness_names?: Berry_firmness_namesListRelationFilter;

    @Field(() => Contest_effect_proseListRelationFilter, {nullable:true})
    contest_effect_prose?: Contest_effect_proseListRelationFilter;

    @Field(() => Contest_type_namesListRelationFilter, {nullable:true})
    contest_type_names?: Contest_type_namesListRelationFilter;

    @Field(() => Egg_group_proseListRelationFilter, {nullable:true})
    egg_group_prose?: Egg_group_proseListRelationFilter;

    @Field(() => Encounter_condition_proseListRelationFilter, {nullable:true})
    encounter_condition_prose?: Encounter_condition_proseListRelationFilter;

    @Field(() => Encounter_condition_value_proseListRelationFilter, {nullable:true})
    encounter_condition_value_prose?: Encounter_condition_value_proseListRelationFilter;

    @Field(() => Encounter_method_proseListRelationFilter, {nullable:true})
    encounter_method_prose?: Encounter_method_proseListRelationFilter;

    @Field(() => Evolution_trigger_proseListRelationFilter, {nullable:true})
    evolution_trigger_prose?: Evolution_trigger_proseListRelationFilter;

    @Field(() => Generation_namesListRelationFilter, {nullable:true})
    generation_names?: Generation_namesListRelationFilter;

    @Field(() => Growth_rate_proseListRelationFilter, {nullable:true})
    growth_rate_prose?: Growth_rate_proseListRelationFilter;

    @Field(() => Item_category_proseListRelationFilter, {nullable:true})
    item_category_prose?: Item_category_proseListRelationFilter;

    @Field(() => Item_flag_proseListRelationFilter, {nullable:true})
    item_flag_prose?: Item_flag_proseListRelationFilter;

    @Field(() => Item_flavor_summariesListRelationFilter, {nullable:true})
    item_flavor_summaries?: Item_flavor_summariesListRelationFilter;

    @Field(() => Item_flavor_textListRelationFilter, {nullable:true})
    item_flavor_text?: Item_flavor_textListRelationFilter;

    @Field(() => Item_fling_effect_proseListRelationFilter, {nullable:true})
    item_fling_effect_prose?: Item_fling_effect_proseListRelationFilter;

    @Field(() => Item_namesListRelationFilter, {nullable:true})
    item_names?: Item_namesListRelationFilter;

    @Field(() => Item_pocket_namesListRelationFilter, {nullable:true})
    item_pocket_names?: Item_pocket_namesListRelationFilter;

    @Field(() => Item_proseListRelationFilter, {nullable:true})
    item_prose?: Item_proseListRelationFilter;

    @Field(() => Language_namesListRelationFilter, {nullable:true})
    language_names_language_names_local_language_idTolanguages?: Language_namesListRelationFilter;

    @Field(() => Language_namesListRelationFilter, {nullable:true})
    language_names_language_names_language_idTolanguages?: Language_namesListRelationFilter;

    @Field(() => Location_area_proseListRelationFilter, {nullable:true})
    location_area_prose?: Location_area_proseListRelationFilter;

    @Field(() => Location_namesListRelationFilter, {nullable:true})
    location_names?: Location_namesListRelationFilter;

    @Field(() => Move_battle_style_proseListRelationFilter, {nullable:true})
    move_battle_style_prose?: Move_battle_style_proseListRelationFilter;

    @Field(() => Move_damage_class_proseListRelationFilter, {nullable:true})
    move_damage_class_prose?: Move_damage_class_proseListRelationFilter;

    @Field(() => Move_effect_changelog_proseListRelationFilter, {nullable:true})
    move_effect_changelog_prose?: Move_effect_changelog_proseListRelationFilter;

    @Field(() => Move_effect_proseListRelationFilter, {nullable:true})
    move_effect_prose?: Move_effect_proseListRelationFilter;

    @Field(() => Move_flag_proseListRelationFilter, {nullable:true})
    move_flag_prose?: Move_flag_proseListRelationFilter;

    @Field(() => Move_flavor_summariesListRelationFilter, {nullable:true})
    move_flavor_summaries?: Move_flavor_summariesListRelationFilter;

    @Field(() => Move_flavor_textListRelationFilter, {nullable:true})
    move_flavor_text?: Move_flavor_textListRelationFilter;

    @Field(() => Move_meta_ailment_namesListRelationFilter, {nullable:true})
    move_meta_ailment_names?: Move_meta_ailment_namesListRelationFilter;

    @Field(() => Move_meta_category_proseListRelationFilter, {nullable:true})
    move_meta_category_prose?: Move_meta_category_proseListRelationFilter;

    @Field(() => Move_namesListRelationFilter, {nullable:true})
    move_names?: Move_namesListRelationFilter;

    @Field(() => Move_target_proseListRelationFilter, {nullable:true})
    move_target_prose?: Move_target_proseListRelationFilter;

    @Field(() => Nature_namesListRelationFilter, {nullable:true})
    nature_names?: Nature_namesListRelationFilter;

    @Field(() => Pokeathlon_stat_namesListRelationFilter, {nullable:true})
    pokeathlon_stat_names?: Pokeathlon_stat_namesListRelationFilter;

    @Field(() => Pokedex_proseListRelationFilter, {nullable:true})
    pokedex_prose?: Pokedex_proseListRelationFilter;

    @Field(() => Pokemon_color_namesListRelationFilter, {nullable:true})
    pokemon_color_names?: Pokemon_color_namesListRelationFilter;

    @Field(() => Pokemon_form_namesListRelationFilter, {nullable:true})
    pokemon_form_names?: Pokemon_form_namesListRelationFilter;

    @Field(() => Pokemon_habitat_namesListRelationFilter, {nullable:true})
    pokemon_habitat_names?: Pokemon_habitat_namesListRelationFilter;

    @Field(() => Pokemon_move_method_proseListRelationFilter, {nullable:true})
    pokemon_move_method_prose?: Pokemon_move_method_proseListRelationFilter;

    @Field(() => Pokemon_shape_proseListRelationFilter, {nullable:true})
    pokemon_shape_prose?: Pokemon_shape_proseListRelationFilter;

    @Field(() => Pokemon_species_flavor_summariesListRelationFilter, {nullable:true})
    pokemon_species_flavor_summaries?: Pokemon_species_flavor_summariesListRelationFilter;

    @Field(() => Pokemon_species_flavor_textListRelationFilter, {nullable:true})
    pokemon_species_flavor_text?: Pokemon_species_flavor_textListRelationFilter;

    @Field(() => Pokemon_species_namesListRelationFilter, {nullable:true})
    pokemon_species_names?: Pokemon_species_namesListRelationFilter;

    @Field(() => Pokemon_species_proseListRelationFilter, {nullable:true})
    pokemon_species_prose?: Pokemon_species_proseListRelationFilter;

    @Field(() => Region_namesListRelationFilter, {nullable:true})
    region_names?: Region_namesListRelationFilter;

    @Field(() => Stat_hint_namesListRelationFilter, {nullable:true})
    stat_hint_names?: Stat_hint_namesListRelationFilter;

    @Field(() => Stat_namesListRelationFilter, {nullable:true})
    stat_names?: Stat_namesListRelationFilter;

    @Field(() => Super_contest_effect_proseListRelationFilter, {nullable:true})
    super_contest_effect_prose?: Super_contest_effect_proseListRelationFilter;

    @Field(() => Type_namesListRelationFilter, {nullable:true})
    type_names?: Type_namesListRelationFilter;

    @Field(() => Version_namesListRelationFilter, {nullable:true})
    version_names?: Version_namesListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LanguagesCount {

    @Field(() => Int, {nullable:false})
    ability_changelog_prose!: number;

    @Field(() => Int, {nullable:false})
    ability_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    ability_names!: number;

    @Field(() => Int, {nullable:false})
    ability_prose!: number;

    @Field(() => Int, {nullable:false})
    berry_firmness_names!: number;

    @Field(() => Int, {nullable:false})
    contest_effect_prose!: number;

    @Field(() => Int, {nullable:false})
    contest_type_names!: number;

    @Field(() => Int, {nullable:false})
    egg_group_prose!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_prose!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_value_prose!: number;

    @Field(() => Int, {nullable:false})
    encounter_method_prose!: number;

    @Field(() => Int, {nullable:false})
    evolution_trigger_prose!: number;

    @Field(() => Int, {nullable:false})
    generation_names!: number;

    @Field(() => Int, {nullable:false})
    growth_rate_prose!: number;

    @Field(() => Int, {nullable:false})
    item_category_prose!: number;

    @Field(() => Int, {nullable:false})
    item_flag_prose!: number;

    @Field(() => Int, {nullable:false})
    item_flavor_summaries!: number;

    @Field(() => Int, {nullable:false})
    item_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    item_fling_effect_prose!: number;

    @Field(() => Int, {nullable:false})
    item_names!: number;

    @Field(() => Int, {nullable:false})
    item_pocket_names!: number;

    @Field(() => Int, {nullable:false})
    item_prose!: number;

    @Field(() => Int, {nullable:false})
    language_names_language_names_local_language_idTolanguages!: number;

    @Field(() => Int, {nullable:false})
    language_names_language_names_language_idTolanguages!: number;

    @Field(() => Int, {nullable:false})
    location_area_prose!: number;

    @Field(() => Int, {nullable:false})
    location_names!: number;

    @Field(() => Int, {nullable:false})
    move_battle_style_prose!: number;

    @Field(() => Int, {nullable:false})
    move_damage_class_prose!: number;

    @Field(() => Int, {nullable:false})
    move_effect_changelog_prose!: number;

    @Field(() => Int, {nullable:false})
    move_effect_prose!: number;

    @Field(() => Int, {nullable:false})
    move_flag_prose!: number;

    @Field(() => Int, {nullable:false})
    move_flavor_summaries!: number;

    @Field(() => Int, {nullable:false})
    move_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    move_meta_ailment_names!: number;

    @Field(() => Int, {nullable:false})
    move_meta_category_prose!: number;

    @Field(() => Int, {nullable:false})
    move_names!: number;

    @Field(() => Int, {nullable:false})
    move_target_prose!: number;

    @Field(() => Int, {nullable:false})
    nature_names!: number;

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_names!: number;

    @Field(() => Int, {nullable:false})
    pokedex_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_color_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_form_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_habitat_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_move_method_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_shape_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_flavor_summaries!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_species_prose!: number;

    @Field(() => Int, {nullable:false})
    region_names!: number;

    @Field(() => Int, {nullable:false})
    stat_hint_names!: number;

    @Field(() => Int, {nullable:false})
    stat_names!: number;

    @Field(() => Int, {nullable:false})
    super_contest_effect_prose!: number;

    @Field(() => Int, {nullable:false})
    type_names!: number;

    @Field(() => Int, {nullable:false})
    version_names!: number;
}

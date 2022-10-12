import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { super_contest_effects } from '../super-contest-effects/super-contest-effects.model';
import { contest_effects } from '../contest-effects/contest-effects.model';
import { contest_types } from '../contest-types/contest-types.model';
import { move_effects } from '../move-effects/move-effects.model';
import { move_damage_classes } from '../move-damage-classes/move-damage-classes.model';
import { move_targets } from '../move-targets/move-targets.model';
import { types } from '../types/types.model';
import { generations } from '../generations/generations.model';
import { contest_combos } from '../contest-combos/contest-combos.model';
import { machines } from '../machines/machines.model';
import { move_changelog } from '../move-changelog/move-changelog.model';
import { move_flag_map } from '../move-flag-map/move-flag-map.model';
import { move_flavor_summaries } from '../move-flavor-summaries/move-flavor-summaries.model';
import { move_flavor_text } from '../move-flavor-text/move-flavor-text.model';
import { move_meta } from '../move-meta/move-meta.model';
import { move_meta_stat_changes } from '../move-meta-stat-changes/move-meta-stat-changes.model';
import { move_names } from '../move-names/move-names.model';
import { pokemon_evolution } from '../pokemon-evolution/pokemon-evolution.model';
import { super_contest_combos } from '../super-contest-combos/super-contest-combos.model';
import { MovesCount } from '../prisma/moves-count.output';

@ObjectType()
export class moves {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    target_id!: number;

    @Field(() => Int, {nullable:false})
    damage_class_id!: number;

    @Field(() => Int, {nullable:false})
    effect_id!: number;

    @Field(() => Int, {nullable:true})
    effect_chance!: number | null;

    @Field(() => Int, {nullable:true})
    contest_type_id!: number | null;

    @Field(() => Int, {nullable:true})
    contest_effect_id!: number | null;

    @Field(() => Int, {nullable:true})
    super_contest_effect_id!: number | null;

    @Field(() => super_contest_effects, {nullable:true})
    super_contest_effects?: super_contest_effects | null;

    @Field(() => contest_effects, {nullable:true})
    contest_effects?: contest_effects | null;

    @Field(() => contest_types, {nullable:true})
    contest_types?: contest_types | null;

    @Field(() => move_effects, {nullable:false})
    move_effects?: move_effects;

    @Field(() => move_damage_classes, {nullable:false})
    move_damage_classes?: move_damage_classes;

    @Field(() => move_targets, {nullable:false})
    move_targets?: move_targets;

    @Field(() => types, {nullable:false})
    types?: types;

    @Field(() => generations, {nullable:false})
    generations?: generations;

    @Field(() => [contest_combos], {nullable:true})
    contest_combos_contest_combos_second_move_idTomoves?: Array<contest_combos>;

    @Field(() => [contest_combos], {nullable:true})
    contest_combos_contest_combos_first_move_idTomoves?: Array<contest_combos>;

    @Field(() => [machines], {nullable:true})
    machines?: Array<machines>;

    @Field(() => [move_changelog], {nullable:true})
    move_changelog?: Array<move_changelog>;

    @Field(() => [move_flag_map], {nullable:true})
    move_flag_map?: Array<move_flag_map>;

    @Field(() => [move_flavor_summaries], {nullable:true})
    move_flavor_summaries?: Array<move_flavor_summaries>;

    @Field(() => [move_flavor_text], {nullable:true})
    move_flavor_text?: Array<move_flavor_text>;

    @Field(() => move_meta, {nullable:true})
    move_meta?: move_meta | null;

    @Field(() => [move_meta_stat_changes], {nullable:true})
    move_meta_stat_changes?: Array<move_meta_stat_changes>;

    @Field(() => [move_names], {nullable:true})
    move_names?: Array<move_names>;

    @Field(() => [pokemon_evolution], {nullable:true})
    pokemon_evolution?: Array<pokemon_evolution>;

    @Field(() => [super_contest_combos], {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_second_move_id?: Array<super_contest_combos>;

    @Field(() => [super_contest_combos], {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_first_move_id?: Array<super_contest_combos>;

    @Field(() => MovesCount, {nullable:false})
    _count?: MovesCount;
}

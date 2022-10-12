import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_damage_classes } from '../move-damage-classes/move-damage-classes.model';
import { move_meta_stat_changes } from '../move-meta-stat-changes/move-meta-stat-changes.model';
import { natures } from '../natures/natures.model';
import { pokemon_stats } from '../pokemon-stats/pokemon-stats.model';
import { stat_hints } from '../stat-hints/stat-hints.model';
import { stat_names } from '../stat-names/stat-names.model';
import { StatsCount } from '../prisma/stats-count.output';

@ObjectType()
export class stats {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id!: number | null;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    is_battle_only!: boolean;

    @Field(() => move_damage_classes, {nullable:true})
    move_damage_classes?: move_damage_classes | null;

    @Field(() => [move_meta_stat_changes], {nullable:true})
    move_meta_stat_changes?: Array<move_meta_stat_changes>;

    @Field(() => [natures], {nullable:true})
    natures_natures_increased_stat_idTostats?: Array<natures>;

    @Field(() => [natures], {nullable:true})
    natures_natures_decreased_stat_idTostats?: Array<natures>;

    @Field(() => [pokemon_stats], {nullable:true})
    pokemon_stats?: Array<pokemon_stats>;

    @Field(() => [stat_hints], {nullable:true})
    stat_hints?: Array<stat_hints>;

    @Field(() => [stat_names], {nullable:true})
    stat_names?: Array<stat_names>;

    @Field(() => StatsCount, {nullable:false})
    _count?: StatsCount;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesCreateNestedOneWithoutStatsInput } from '../move-damage-classes/move-damage-classes-create-nested-one-without-stats.input';
import { move_meta_stat_changesCreateNestedManyWithoutStatsInput } from '../move-meta-stat-changes/move-meta-stat-changes-create-nested-many-without-stats.input';
import { naturesCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput } from '../natures/natures-create-nested-many-without-stats-natures-increased-stat-id-tostats.input';
import { pokemon_statsCreateNestedManyWithoutStatsInput } from '../pokemon-stats/pokemon-stats-create-nested-many-without-stats.input';
import { stat_hintsCreateNestedManyWithoutStatsInput } from '../stat-hints/stat-hints-create-nested-many-without-stats.input';
import { stat_namesCreateNestedManyWithoutStatsInput } from '../stat-names/stat-names-create-nested-many-without-stats.input';

@InputType()
export class statsCreateWithoutNatures_natures_decreased_stat_idTostatsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    is_battle_only!: boolean;

    @Field(() => move_damage_classesCreateNestedOneWithoutStatsInput, {nullable:true})
    move_damage_classes?: move_damage_classesCreateNestedOneWithoutStatsInput;

    @Field(() => move_meta_stat_changesCreateNestedManyWithoutStatsInput, {nullable:true})
    move_meta_stat_changes?: move_meta_stat_changesCreateNestedManyWithoutStatsInput;

    @Field(() => naturesCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput, {nullable:true})
    natures_natures_increased_stat_idTostats?: naturesCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput;

    @Field(() => pokemon_statsCreateNestedManyWithoutStatsInput, {nullable:true})
    pokemon_stats?: pokemon_statsCreateNestedManyWithoutStatsInput;

    @Field(() => stat_hintsCreateNestedManyWithoutStatsInput, {nullable:true})
    stat_hints?: stat_hintsCreateNestedManyWithoutStatsInput;

    @Field(() => stat_namesCreateNestedManyWithoutStatsInput, {nullable:true})
    stat_names?: stat_namesCreateNestedManyWithoutStatsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_meta_stat_changesUncheckedCreateNestedManyWithoutStatsInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-create-nested-many-without-stats.input';
import { naturesUncheckedCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput } from '../natures/natures-unchecked-create-nested-many-without-stats-natures-increased-stat-id-tostats.input';
import { naturesUncheckedCreateNestedManyWithoutStats_natures_decreased_stat_idTostatsInput } from '../natures/natures-unchecked-create-nested-many-without-stats-natures-decreased-stat-id-tostats.input';
import { pokemon_statsUncheckedCreateNestedManyWithoutStatsInput } from '../pokemon-stats/pokemon-stats-unchecked-create-nested-many-without-stats.input';
import { stat_hintsUncheckedCreateNestedManyWithoutStatsInput } from '../stat-hints/stat-hints-unchecked-create-nested-many-without-stats.input';

@InputType()
export class statsUncheckedCreateWithoutStat_namesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    is_battle_only!: boolean;

    @Field(() => move_meta_stat_changesUncheckedCreateNestedManyWithoutStatsInput, {nullable:true})
    move_meta_stat_changes?: move_meta_stat_changesUncheckedCreateNestedManyWithoutStatsInput;

    @Field(() => naturesUncheckedCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput, {nullable:true})
    natures_natures_increased_stat_idTostats?: naturesUncheckedCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput;

    @Field(() => naturesUncheckedCreateNestedManyWithoutStats_natures_decreased_stat_idTostatsInput, {nullable:true})
    natures_natures_decreased_stat_idTostats?: naturesUncheckedCreateNestedManyWithoutStats_natures_decreased_stat_idTostatsInput;

    @Field(() => pokemon_statsUncheckedCreateNestedManyWithoutStatsInput, {nullable:true})
    pokemon_stats?: pokemon_statsUncheckedCreateNestedManyWithoutStatsInput;

    @Field(() => stat_hintsUncheckedCreateNestedManyWithoutStatsInput, {nullable:true})
    stat_hints?: stat_hintsUncheckedCreateNestedManyWithoutStatsInput;
}

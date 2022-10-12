import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { naturesUncheckedCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput } from '../natures/natures-unchecked-create-nested-many-without-stats-natures-increased-stat-id-tostats.input';
import { naturesUncheckedCreateNestedManyWithoutStats_natures_decreased_stat_idTostatsInput } from '../natures/natures-unchecked-create-nested-many-without-stats-natures-decreased-stat-id-tostats.input';
import { pokemon_statsUncheckedCreateNestedManyWithoutStatsInput } from '../pokemon-stats/pokemon-stats-unchecked-create-nested-many-without-stats.input';
import { stat_hintsUncheckedCreateNestedManyWithoutStatsInput } from '../stat-hints/stat-hints-unchecked-create-nested-many-without-stats.input';
import { stat_namesUncheckedCreateNestedManyWithoutStatsInput } from '../stat-names/stat-names-unchecked-create-nested-many-without-stats.input';

@InputType()
export class statsUncheckedCreateWithoutMove_meta_stat_changesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Boolean, {nullable:false})
    is_battle_only!: boolean;

    @Field(() => naturesUncheckedCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput, {nullable:true})
    natures_natures_increased_stat_idTostats?: naturesUncheckedCreateNestedManyWithoutStats_natures_increased_stat_idTostatsInput;

    @Field(() => naturesUncheckedCreateNestedManyWithoutStats_natures_decreased_stat_idTostatsInput, {nullable:true})
    natures_natures_decreased_stat_idTostats?: naturesUncheckedCreateNestedManyWithoutStats_natures_decreased_stat_idTostatsInput;

    @Field(() => pokemon_statsUncheckedCreateNestedManyWithoutStatsInput, {nullable:true})
    pokemon_stats?: pokemon_statsUncheckedCreateNestedManyWithoutStatsInput;

    @Field(() => stat_hintsUncheckedCreateNestedManyWithoutStatsInput, {nullable:true})
    stat_hints?: stat_hintsUncheckedCreateNestedManyWithoutStatsInput;

    @Field(() => stat_namesUncheckedCreateNestedManyWithoutStatsInput, {nullable:true})
    stat_names?: stat_namesUncheckedCreateNestedManyWithoutStatsInput;
}

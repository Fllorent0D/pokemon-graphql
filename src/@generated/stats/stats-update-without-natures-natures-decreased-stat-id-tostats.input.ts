import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { move_damage_classesUpdateOneWithoutStatsNestedInput } from '../move-damage-classes/move-damage-classes-update-one-without-stats-nested.input';
import { move_meta_stat_changesUpdateManyWithoutStatsNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-update-many-without-stats-nested.input';
import { naturesUpdateManyWithoutStats_natures_increased_stat_idTostatsNestedInput } from '../natures/natures-update-many-without-stats-natures-increased-stat-id-tostats-nested.input';
import { pokemon_statsUpdateManyWithoutStatsNestedInput } from '../pokemon-stats/pokemon-stats-update-many-without-stats-nested.input';
import { stat_hintsUpdateManyWithoutStatsNestedInput } from '../stat-hints/stat-hints-update-many-without-stats-nested.input';
import { stat_namesUpdateManyWithoutStatsNestedInput } from '../stat-names/stat-names-update-many-without-stats-nested.input';

@InputType()
export class statsUpdateWithoutNatures_natures_decreased_stat_idTostatsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_battle_only?: BoolFieldUpdateOperationsInput;

    @Field(() => move_damage_classesUpdateOneWithoutStatsNestedInput, {nullable:true})
    move_damage_classes?: move_damage_classesUpdateOneWithoutStatsNestedInput;

    @Field(() => move_meta_stat_changesUpdateManyWithoutStatsNestedInput, {nullable:true})
    move_meta_stat_changes?: move_meta_stat_changesUpdateManyWithoutStatsNestedInput;

    @Field(() => naturesUpdateManyWithoutStats_natures_increased_stat_idTostatsNestedInput, {nullable:true})
    natures_natures_increased_stat_idTostats?: naturesUpdateManyWithoutStats_natures_increased_stat_idTostatsNestedInput;

    @Field(() => pokemon_statsUpdateManyWithoutStatsNestedInput, {nullable:true})
    pokemon_stats?: pokemon_statsUpdateManyWithoutStatsNestedInput;

    @Field(() => stat_hintsUpdateManyWithoutStatsNestedInput, {nullable:true})
    stat_hints?: stat_hintsUpdateManyWithoutStatsNestedInput;

    @Field(() => stat_namesUpdateManyWithoutStatsNestedInput, {nullable:true})
    stat_names?: stat_namesUpdateManyWithoutStatsNestedInput;
}

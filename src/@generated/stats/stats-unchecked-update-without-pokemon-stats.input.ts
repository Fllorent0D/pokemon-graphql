import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { move_meta_stat_changesUncheckedUpdateManyWithoutStatsNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-update-many-without-stats-nested.input';
import { naturesUncheckedUpdateManyWithoutStats_natures_increased_stat_idTostatsNestedInput } from '../natures/natures-unchecked-update-many-without-stats-natures-increased-stat-id-tostats-nested.input';
import { naturesUncheckedUpdateManyWithoutStats_natures_decreased_stat_idTostatsNestedInput } from '../natures/natures-unchecked-update-many-without-stats-natures-decreased-stat-id-tostats-nested.input';
import { stat_hintsUncheckedUpdateManyWithoutStatsNestedInput } from '../stat-hints/stat-hints-unchecked-update-many-without-stats-nested.input';
import { stat_namesUncheckedUpdateManyWithoutStatsNestedInput } from '../stat-names/stat-names-unchecked-update-many-without-stats-nested.input';

@InputType()
export class statsUncheckedUpdateWithoutPokemon_statsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    damage_class_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_battle_only?: BoolFieldUpdateOperationsInput;

    @Field(() => move_meta_stat_changesUncheckedUpdateManyWithoutStatsNestedInput, {nullable:true})
    move_meta_stat_changes?: move_meta_stat_changesUncheckedUpdateManyWithoutStatsNestedInput;

    @Field(() => naturesUncheckedUpdateManyWithoutStats_natures_increased_stat_idTostatsNestedInput, {nullable:true})
    natures_natures_increased_stat_idTostats?: naturesUncheckedUpdateManyWithoutStats_natures_increased_stat_idTostatsNestedInput;

    @Field(() => naturesUncheckedUpdateManyWithoutStats_natures_decreased_stat_idTostatsNestedInput, {nullable:true})
    natures_natures_decreased_stat_idTostats?: naturesUncheckedUpdateManyWithoutStats_natures_decreased_stat_idTostatsNestedInput;

    @Field(() => stat_hintsUncheckedUpdateManyWithoutStatsNestedInput, {nullable:true})
    stat_hints?: stat_hintsUncheckedUpdateManyWithoutStatsNestedInput;

    @Field(() => stat_namesUncheckedUpdateManyWithoutStatsNestedInput, {nullable:true})
    stat_names?: stat_namesUncheckedUpdateManyWithoutStatsNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { contest_combosUncheckedUpdateManyWithoutMoves_contest_combos_second_move_idTomovesNestedInput } from '../contest-combos/contest-combos-unchecked-update-many-without-moves-contest-combos-second-move-id-tomoves-nested.input';
import { machinesUncheckedUpdateManyWithoutMovesNestedInput } from '../machines/machines-unchecked-update-many-without-moves-nested.input';
import { move_changelogUncheckedUpdateManyWithoutMovesNestedInput } from '../move-changelog/move-changelog-unchecked-update-many-without-moves-nested.input';
import { move_flag_mapUncheckedUpdateManyWithoutMovesNestedInput } from '../move-flag-map/move-flag-map-unchecked-update-many-without-moves-nested.input';
import { move_flavor_summariesUncheckedUpdateManyWithoutMovesNestedInput } from '../move-flavor-summaries/move-flavor-summaries-unchecked-update-many-without-moves-nested.input';
import { move_flavor_textUncheckedUpdateManyWithoutMovesNestedInput } from '../move-flavor-text/move-flavor-text-unchecked-update-many-without-moves-nested.input';
import { move_metaUncheckedUpdateOneWithoutMovesNestedInput } from '../move-meta/move-meta-unchecked-update-one-without-moves-nested.input';
import { move_meta_stat_changesUncheckedUpdateManyWithoutMovesNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-update-many-without-moves-nested.input';
import { move_namesUncheckedUpdateManyWithoutMovesNestedInput } from '../move-names/move-names-unchecked-update-many-without-moves-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutMovesNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-moves-nested.input';
import { super_contest_combosUncheckedUpdateManyWithoutMoves_movesTosuper_contest_combos_second_move_idNestedInput } from '../super-contest-combos/super-contest-combos-unchecked-update-many-without-moves-moves-tosuper-contest-combos-second-move-id-nested.input';
import { super_contest_combosUncheckedUpdateManyWithoutMoves_movesTosuper_contest_combos_first_move_idNestedInput } from '../super-contest-combos/super-contest-combos-unchecked-update-many-without-moves-moves-tosuper-contest-combos-first-move-id-nested.input';

@InputType()
export class movesUncheckedUpdateWithoutContest_combos_contest_combos_first_move_idTomovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    type_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    target_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    damage_class_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effect_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    effect_chance?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    contest_type_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    contest_effect_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    super_contest_effect_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => contest_combosUncheckedUpdateManyWithoutMoves_contest_combos_second_move_idTomovesNestedInput, {nullable:true})
    contest_combos_contest_combos_second_move_idTomoves?: contest_combosUncheckedUpdateManyWithoutMoves_contest_combos_second_move_idTomovesNestedInput;

    @Field(() => machinesUncheckedUpdateManyWithoutMovesNestedInput, {nullable:true})
    machines?: machinesUncheckedUpdateManyWithoutMovesNestedInput;

    @Field(() => move_changelogUncheckedUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_changelog?: move_changelogUncheckedUpdateManyWithoutMovesNestedInput;

    @Field(() => move_flag_mapUncheckedUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_flag_map?: move_flag_mapUncheckedUpdateManyWithoutMovesNestedInput;

    @Field(() => move_flavor_summariesUncheckedUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_flavor_summaries?: move_flavor_summariesUncheckedUpdateManyWithoutMovesNestedInput;

    @Field(() => move_flavor_textUncheckedUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_flavor_text?: move_flavor_textUncheckedUpdateManyWithoutMovesNestedInput;

    @Field(() => move_metaUncheckedUpdateOneWithoutMovesNestedInput, {nullable:true})
    move_meta?: move_metaUncheckedUpdateOneWithoutMovesNestedInput;

    @Field(() => move_meta_stat_changesUncheckedUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_meta_stat_changes?: move_meta_stat_changesUncheckedUpdateManyWithoutMovesNestedInput;

    @Field(() => move_namesUncheckedUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_names?: move_namesUncheckedUpdateManyWithoutMovesNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutMovesNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUncheckedUpdateManyWithoutMovesNestedInput;

    @Field(() => super_contest_combosUncheckedUpdateManyWithoutMoves_movesTosuper_contest_combos_second_move_idNestedInput, {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_second_move_id?: super_contest_combosUncheckedUpdateManyWithoutMoves_movesTosuper_contest_combos_second_move_idNestedInput;

    @Field(() => super_contest_combosUncheckedUpdateManyWithoutMoves_movesTosuper_contest_combos_first_move_idNestedInput, {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_first_move_id?: super_contest_combosUncheckedUpdateManyWithoutMoves_movesTosuper_contest_combos_first_move_idNestedInput;
}

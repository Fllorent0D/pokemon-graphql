import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { super_contest_effectsUpdateOneWithoutMovesNestedInput } from '../super-contest-effects/super-contest-effects-update-one-without-moves-nested.input';
import { contest_effectsUpdateOneWithoutMovesNestedInput } from '../contest-effects/contest-effects-update-one-without-moves-nested.input';
import { contest_typesUpdateOneWithoutMovesNestedInput } from '../contest-types/contest-types-update-one-without-moves-nested.input';
import { move_effectsUpdateOneRequiredWithoutMovesNestedInput } from '../move-effects/move-effects-update-one-required-without-moves-nested.input';
import { move_damage_classesUpdateOneRequiredWithoutMovesNestedInput } from '../move-damage-classes/move-damage-classes-update-one-required-without-moves-nested.input';
import { move_targetsUpdateOneRequiredWithoutMovesNestedInput } from '../move-targets/move-targets-update-one-required-without-moves-nested.input';
import { typesUpdateOneRequiredWithoutMovesNestedInput } from '../types/types-update-one-required-without-moves-nested.input';
import { generationsUpdateOneRequiredWithoutMovesNestedInput } from '../generations/generations-update-one-required-without-moves-nested.input';
import { contest_combosUpdateManyWithoutMoves_contest_combos_second_move_idTomovesNestedInput } from '../contest-combos/contest-combos-update-many-without-moves-contest-combos-second-move-id-tomoves-nested.input';
import { contest_combosUpdateManyWithoutMoves_contest_combos_first_move_idTomovesNestedInput } from '../contest-combos/contest-combos-update-many-without-moves-contest-combos-first-move-id-tomoves-nested.input';
import { machinesUpdateManyWithoutMovesNestedInput } from '../machines/machines-update-many-without-moves-nested.input';
import { move_changelogUpdateManyWithoutMovesNestedInput } from '../move-changelog/move-changelog-update-many-without-moves-nested.input';
import { move_flag_mapUpdateManyWithoutMovesNestedInput } from '../move-flag-map/move-flag-map-update-many-without-moves-nested.input';
import { move_flavor_textUpdateManyWithoutMovesNestedInput } from '../move-flavor-text/move-flavor-text-update-many-without-moves-nested.input';
import { move_metaUpdateOneWithoutMovesNestedInput } from '../move-meta/move-meta-update-one-without-moves-nested.input';
import { move_meta_stat_changesUpdateManyWithoutMovesNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-update-many-without-moves-nested.input';
import { move_namesUpdateManyWithoutMovesNestedInput } from '../move-names/move-names-update-many-without-moves-nested.input';
import { pokemon_evolutionUpdateManyWithoutMovesNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-moves-nested.input';
import { super_contest_combosUpdateManyWithoutMoves_movesTosuper_contest_combos_second_move_idNestedInput } from '../super-contest-combos/super-contest-combos-update-many-without-moves-moves-tosuper-contest-combos-second-move-id-nested.input';
import { super_contest_combosUpdateManyWithoutMoves_movesTosuper_contest_combos_first_move_idNestedInput } from '../super-contest-combos/super-contest-combos-update-many-without-moves-moves-tosuper-contest-combos-first-move-id-nested.input';

@InputType()
export class movesUpdateWithoutMove_flavor_summariesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    effect_chance?: NullableIntFieldUpdateOperationsInput;

    @Field(() => super_contest_effectsUpdateOneWithoutMovesNestedInput, {nullable:true})
    super_contest_effects?: super_contest_effectsUpdateOneWithoutMovesNestedInput;

    @Field(() => contest_effectsUpdateOneWithoutMovesNestedInput, {nullable:true})
    contest_effects?: contest_effectsUpdateOneWithoutMovesNestedInput;

    @Field(() => contest_typesUpdateOneWithoutMovesNestedInput, {nullable:true})
    contest_types?: contest_typesUpdateOneWithoutMovesNestedInput;

    @Field(() => move_effectsUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    move_effects?: move_effectsUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => move_damage_classesUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    move_damage_classes?: move_damage_classesUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => move_targetsUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    move_targets?: move_targetsUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => typesUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    types?: typesUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => generationsUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutMovesNestedInput;

    @Field(() => contest_combosUpdateManyWithoutMoves_contest_combos_second_move_idTomovesNestedInput, {nullable:true})
    contest_combos_contest_combos_second_move_idTomoves?: contest_combosUpdateManyWithoutMoves_contest_combos_second_move_idTomovesNestedInput;

    @Field(() => contest_combosUpdateManyWithoutMoves_contest_combos_first_move_idTomovesNestedInput, {nullable:true})
    contest_combos_contest_combos_first_move_idTomoves?: contest_combosUpdateManyWithoutMoves_contest_combos_first_move_idTomovesNestedInput;

    @Field(() => machinesUpdateManyWithoutMovesNestedInput, {nullable:true})
    machines?: machinesUpdateManyWithoutMovesNestedInput;

    @Field(() => move_changelogUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_changelog?: move_changelogUpdateManyWithoutMovesNestedInput;

    @Field(() => move_flag_mapUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_flag_map?: move_flag_mapUpdateManyWithoutMovesNestedInput;

    @Field(() => move_flavor_textUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_flavor_text?: move_flavor_textUpdateManyWithoutMovesNestedInput;

    @Field(() => move_metaUpdateOneWithoutMovesNestedInput, {nullable:true})
    move_meta?: move_metaUpdateOneWithoutMovesNestedInput;

    @Field(() => move_meta_stat_changesUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_meta_stat_changes?: move_meta_stat_changesUpdateManyWithoutMovesNestedInput;

    @Field(() => move_namesUpdateManyWithoutMovesNestedInput, {nullable:true})
    move_names?: move_namesUpdateManyWithoutMovesNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutMovesNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUpdateManyWithoutMovesNestedInput;

    @Field(() => super_contest_combosUpdateManyWithoutMoves_movesTosuper_contest_combos_second_move_idNestedInput, {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_second_move_id?: super_contest_combosUpdateManyWithoutMoves_movesTosuper_contest_combos_second_move_idNestedInput;

    @Field(() => super_contest_combosUpdateManyWithoutMoves_movesTosuper_contest_combos_first_move_idNestedInput, {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_first_move_id?: super_contest_combosUpdateManyWithoutMoves_movesTosuper_contest_combos_first_move_idNestedInput;
}

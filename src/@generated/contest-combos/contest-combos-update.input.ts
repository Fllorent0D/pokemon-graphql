import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesUpdateOneRequiredWithoutContest_combos_contest_combos_second_move_idTomovesNestedInput } from '../moves/moves-update-one-required-without-contest-combos-contest-combos-second-move-id-tomoves-nested.input';
import { movesUpdateOneRequiredWithoutContest_combos_contest_combos_first_move_idTomovesNestedInput } from '../moves/moves-update-one-required-without-contest-combos-contest-combos-first-move-id-tomoves-nested.input';

@InputType()
export class contest_combosUpdateInput {

    @Field(() => movesUpdateOneRequiredWithoutContest_combos_contest_combos_second_move_idTomovesNestedInput, {nullable:true})
    moves_contest_combos_second_move_idTomoves?: movesUpdateOneRequiredWithoutContest_combos_contest_combos_second_move_idTomovesNestedInput;

    @Field(() => movesUpdateOneRequiredWithoutContest_combos_contest_combos_first_move_idTomovesNestedInput, {nullable:true})
    moves_contest_combos_first_move_idTomoves?: movesUpdateOneRequiredWithoutContest_combos_contest_combos_first_move_idTomovesNestedInput;
}

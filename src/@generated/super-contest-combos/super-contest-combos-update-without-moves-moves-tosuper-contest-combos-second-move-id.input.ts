import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesUpdateOneRequiredWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idNestedInput } from '../moves/moves-update-one-required-without-super-contest-combos-moves-tosuper-contest-combos-first-move-id-nested.input';

@InputType()
export class super_contest_combosUpdateWithoutMoves_movesTosuper_contest_combos_second_move_idInput {

    @Field(() => movesUpdateOneRequiredWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idNestedInput, {nullable:true})
    moves_movesTosuper_contest_combos_first_move_id?: movesUpdateOneRequiredWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idNestedInput;
}

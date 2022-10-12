import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesCreateNestedOneWithoutContest_combos_contest_combos_second_move_idTomovesInput } from '../moves/moves-create-nested-one-without-contest-combos-contest-combos-second-move-id-tomoves.input';

@InputType()
export class contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput {

    @Field(() => movesCreateNestedOneWithoutContest_combos_contest_combos_second_move_idTomovesInput, {nullable:false})
    moves_contest_combos_second_move_idTomoves!: movesCreateNestedOneWithoutContest_combos_contest_combos_second_move_idTomovesInput;
}

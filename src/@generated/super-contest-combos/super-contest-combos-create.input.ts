import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesCreateNestedOneWithoutSuper_contest_combos_movesTosuper_contest_combos_second_move_idInput } from '../moves/moves-create-nested-one-without-super-contest-combos-moves-tosuper-contest-combos-second-move-id.input';
import { movesCreateNestedOneWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput } from '../moves/moves-create-nested-one-without-super-contest-combos-moves-tosuper-contest-combos-first-move-id.input';

@InputType()
export class super_contest_combosCreateInput {

    @Field(() => movesCreateNestedOneWithoutSuper_contest_combos_movesTosuper_contest_combos_second_move_idInput, {nullable:false})
    moves_movesTosuper_contest_combos_second_move_id!: movesCreateNestedOneWithoutSuper_contest_combos_movesTosuper_contest_combos_second_move_idInput;

    @Field(() => movesCreateNestedOneWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput, {nullable:false})
    moves_movesTosuper_contest_combos_first_move_id!: movesCreateNestedOneWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_combosScalarWhereInput } from './contest-combos-scalar-where.input';
import { Type } from 'class-transformer';
import { contest_combosUncheckedUpdateManyWithoutContest_combos_contest_combos_second_move_idTomovesInput } from './contest-combos-unchecked-update-many-without-contest-combos-contest-combos-second-move-id-tomoves.input';

@InputType()
export class contest_combosUpdateManyWithWhereWithoutMoves_contest_combos_second_move_idTomovesInput {

    @Field(() => contest_combosScalarWhereInput, {nullable:false})
    @Type(() => contest_combosScalarWhereInput)
    where!: contest_combosScalarWhereInput;

    @Field(() => contest_combosUncheckedUpdateManyWithoutContest_combos_contest_combos_second_move_idTomovesInput, {nullable:false})
    @Type(() => contest_combosUncheckedUpdateManyWithoutContest_combos_contest_combos_second_move_idTomovesInput)
    data!: contest_combosUncheckedUpdateManyWithoutContest_combos_contest_combos_second_move_idTomovesInput;
}

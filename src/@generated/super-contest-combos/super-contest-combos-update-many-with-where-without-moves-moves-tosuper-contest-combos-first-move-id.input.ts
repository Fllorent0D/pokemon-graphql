import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_combosScalarWhereInput } from './super-contest-combos-scalar-where.input';
import { Type } from 'class-transformer';
import { super_contest_combosUncheckedUpdateManyWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput } from './super-contest-combos-unchecked-update-many-without-super-contest-combos-moves-tosuper-contest-combos-first-move-id.input';

@InputType()
export class super_contest_combosUpdateManyWithWhereWithoutMoves_movesTosuper_contest_combos_first_move_idInput {

    @Field(() => super_contest_combosScalarWhereInput, {nullable:false})
    @Type(() => super_contest_combosScalarWhereInput)
    where!: super_contest_combosScalarWhereInput;

    @Field(() => super_contest_combosUncheckedUpdateManyWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput, {nullable:false})
    @Type(() => super_contest_combosUncheckedUpdateManyWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput)
    data!: super_contest_combosUncheckedUpdateManyWithoutSuper_contest_combos_movesTosuper_contest_combos_first_move_idInput;
}

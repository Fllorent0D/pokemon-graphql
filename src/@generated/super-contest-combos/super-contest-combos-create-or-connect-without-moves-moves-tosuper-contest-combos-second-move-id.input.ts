import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_combosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { super_contest_combosCreateWithoutMoves_movesTosuper_contest_combos_second_move_idInput } from './super-contest-combos-create-without-moves-moves-tosuper-contest-combos-second-move-id.input';

@InputType()
export class super_contest_combosCreateOrConnectWithoutMoves_movesTosuper_contest_combos_second_move_idInput {

    @Field(() => super_contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_combosWhereUniqueInput)
    where!: super_contest_combosWhereUniqueInput;

    @Field(() => super_contest_combosCreateWithoutMoves_movesTosuper_contest_combos_second_move_idInput, {nullable:false})
    @Type(() => super_contest_combosCreateWithoutMoves_movesTosuper_contest_combos_second_move_idInput)
    create!: super_contest_combosCreateWithoutMoves_movesTosuper_contest_combos_second_move_idInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_combosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { contest_combosUpdateWithoutMoves_contest_combos_first_move_idTomovesInput } from './contest-combos-update-without-moves-contest-combos-first-move-id-tomoves.input';

@InputType()
export class contest_combosUpdateWithWhereUniqueWithoutMoves_contest_combos_first_move_idTomovesInput {

    @Field(() => contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => contest_combosWhereUniqueInput)
    where!: contest_combosWhereUniqueInput;

    @Field(() => contest_combosUpdateWithoutMoves_contest_combos_first_move_idTomovesInput, {nullable:false})
    @Type(() => contest_combosUpdateWithoutMoves_contest_combos_first_move_idTomovesInput)
    data!: contest_combosUpdateWithoutMoves_contest_combos_first_move_idTomovesInput;
}

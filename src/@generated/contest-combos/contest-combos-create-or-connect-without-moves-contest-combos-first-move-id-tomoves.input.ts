import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_combosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput } from './contest-combos-create-without-moves-contest-combos-first-move-id-tomoves.input';

@InputType()
export class contest_combosCreateOrConnectWithoutMoves_contest_combos_first_move_idTomovesInput {

    @Field(() => contest_combosWhereUniqueInput, {nullable:false})
    @Type(() => contest_combosWhereUniqueInput)
    where!: contest_combosWhereUniqueInput;

    @Field(() => contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput, {nullable:false})
    @Type(() => contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput)
    create!: contest_combosCreateWithoutMoves_contest_combos_first_move_idTomovesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class contest_combosUncheckedCreateWithoutMoves_contest_combos_second_move_idTomovesInput {

    @Field(() => Int, {nullable:false})
    first_move_id!: number;
}

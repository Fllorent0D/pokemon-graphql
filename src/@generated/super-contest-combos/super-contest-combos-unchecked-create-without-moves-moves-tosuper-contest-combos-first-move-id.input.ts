import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class super_contest_combosUncheckedCreateWithoutMoves_movesTosuper_contest_combos_first_move_idInput {

    @Field(() => Int, {nullable:false})
    second_move_id!: number;
}

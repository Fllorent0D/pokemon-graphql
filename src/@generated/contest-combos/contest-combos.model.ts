import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { moves } from '../moves/moves.model';

@ObjectType()
export class contest_combos {

    @Field(() => Int, {nullable:false})
    first_move_id!: number;

    @Field(() => Int, {nullable:false})
    second_move_id!: number;

    @Field(() => moves, {nullable:false})
    moves_contest_combos_second_move_idTomoves?: moves;

    @Field(() => moves, {nullable:false})
    moves_contest_combos_first_move_idTomoves?: moves;
}

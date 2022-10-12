import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { moves } from '../moves/moves.model';

@ObjectType()
export class super_contest_combos {

    @Field(() => Int, {nullable:false})
    first_move_id!: number;

    @Field(() => Int, {nullable:false})
    second_move_id!: number;

    @Field(() => moves, {nullable:false})
    moves_movesTosuper_contest_combos_second_move_id?: moves;

    @Field(() => moves, {nullable:false})
    moves_movesTosuper_contest_combos_first_move_id?: moves;
}

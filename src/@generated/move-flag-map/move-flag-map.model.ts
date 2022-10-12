import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_flags } from '../move-flags/move-flags.model';
import { moves } from '../moves/moves.model';

@ObjectType()
export class move_flag_map {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;

    @Field(() => move_flags, {nullable:false})
    move_flags?: move_flags;

    @Field(() => moves, {nullable:false})
    moves?: moves;
}

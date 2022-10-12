import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { stats } from '../stats/stats.model';
import { moves } from '../moves/moves.model';

@ObjectType()
export class move_meta_stat_changes {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => stats, {nullable:false})
    stats?: stats;

    @Field(() => moves, {nullable:false})
    moves?: moves;
}

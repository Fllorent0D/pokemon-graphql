import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MovesCount {

    @Field(() => Int, {nullable:false})
    contest_combos_contest_combos_second_move_idTomoves!: number;

    @Field(() => Int, {nullable:false})
    contest_combos_contest_combos_first_move_idTomoves!: number;

    @Field(() => Int, {nullable:false})
    machines!: number;

    @Field(() => Int, {nullable:false})
    move_changelog!: number;

    @Field(() => Int, {nullable:false})
    move_flag_map!: number;

    @Field(() => Int, {nullable:false})
    move_flavor_summaries!: number;

    @Field(() => Int, {nullable:false})
    move_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    move_meta_stat_changes!: number;

    @Field(() => Int, {nullable:false})
    move_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_evolution!: number;

    @Field(() => Int, {nullable:false})
    super_contest_combos_movesTosuper_contest_combos_second_move_id!: number;

    @Field(() => Int, {nullable:false})
    super_contest_combos_movesTosuper_contest_combos_first_move_id!: number;
}

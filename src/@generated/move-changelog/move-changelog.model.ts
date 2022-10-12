import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_effects } from '../move-effects/move-effects.model';
import { types } from '../types/types.model';
import { version_groups } from '../version-groups/version-groups.model';
import { moves } from '../moves/moves.model';

@ObjectType()
export class move_changelog {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    changed_in_version_group_id!: number;

    @Field(() => Int, {nullable:true})
    type_id!: number | null;

    @Field(() => Int, {nullable:true})
    effect_id!: number | null;

    @Field(() => Int, {nullable:true})
    effect_chance!: number | null;

    @Field(() => move_effects, {nullable:true})
    move_effects?: move_effects | null;

    @Field(() => types, {nullable:true})
    types?: types | null;

    @Field(() => version_groups, {nullable:false})
    version_groups?: version_groups;

    @Field(() => moves, {nullable:false})
    moves?: moves;
}

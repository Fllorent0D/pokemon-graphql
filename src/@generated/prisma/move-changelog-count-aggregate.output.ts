import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_changelogCountAggregate {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    changed_in_version_group_id!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    effect_id!: number;

    @Field(() => Int, {nullable:false})
    effect_chance!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

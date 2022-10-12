import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_effect_proseCountAggregate {

    @Field(() => Int, {nullable:false})
    move_effect_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => Int, {nullable:false})
    short_effect!: number;

    @Field(() => Int, {nullable:false})
    effect!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

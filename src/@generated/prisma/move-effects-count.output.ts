import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_effectsCount {

    @Field(() => Int, {nullable:false})
    move_changelog!: number;

    @Field(() => Int, {nullable:false})
    move_effect_changelog!: number;

    @Field(() => Int, {nullable:false})
    move_effect_prose!: number;

    @Field(() => Int, {nullable:false})
    moves!: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_targetsCount {

    @Field(() => Int, {nullable:false})
    move_target_prose!: number;

    @Field(() => Int, {nullable:false})
    moves!: number;
}

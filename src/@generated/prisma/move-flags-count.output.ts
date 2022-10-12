import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_flagsCount {

    @Field(() => Int, {nullable:false})
    move_flag_map!: number;

    @Field(() => Int, {nullable:false})
    move_flag_prose!: number;
}

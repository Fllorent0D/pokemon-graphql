import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_damage_classesCount {

    @Field(() => Int, {nullable:false})
    move_damage_class_prose!: number;

    @Field(() => Int, {nullable:false})
    moves!: number;

    @Field(() => Int, {nullable:false})
    stats!: number;

    @Field(() => Int, {nullable:false})
    types!: number;
}

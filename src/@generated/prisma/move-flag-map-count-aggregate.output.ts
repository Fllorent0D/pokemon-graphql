import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_flag_mapCountAggregate {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_effect_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    move_effect_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
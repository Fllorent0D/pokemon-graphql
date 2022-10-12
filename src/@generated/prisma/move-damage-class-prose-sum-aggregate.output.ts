import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_damage_class_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    move_damage_class_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}

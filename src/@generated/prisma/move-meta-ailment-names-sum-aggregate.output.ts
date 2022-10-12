import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Move_meta_ailment_namesSumAggregate {

    @Field(() => Int, {nullable:true})
    move_meta_ailment_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}

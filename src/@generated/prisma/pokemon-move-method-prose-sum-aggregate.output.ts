import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_move_method_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    pokemon_move_method_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}

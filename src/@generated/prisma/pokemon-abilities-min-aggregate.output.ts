import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_abilitiesMinAggregate {

    @Field(() => Int, {nullable:true})
    pokemon_id?: number;

    @Field(() => Int, {nullable:true})
    ability_id?: number;

    @Field(() => Boolean, {nullable:true})
    is_dream?: boolean;

    @Field(() => Int, {nullable:true})
    slot?: number;
}

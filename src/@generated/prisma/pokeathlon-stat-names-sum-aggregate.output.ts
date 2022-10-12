import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokeathlon_stat_namesSumAggregate {

    @Field(() => Int, {nullable:true})
    pokeathlon_stat_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}

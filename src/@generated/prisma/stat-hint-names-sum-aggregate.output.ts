import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Stat_hint_namesSumAggregate {

    @Field(() => Int, {nullable:true})
    stat_hint_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}

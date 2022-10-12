import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Nature_pokeathlon_statsMinAggregate {

    @Field(() => Int, {nullable:true})
    nature_id?: number;

    @Field(() => Int, {nullable:true})
    pokeathlon_stat_id?: number;

    @Field(() => Int, {nullable:true})
    max_change?: number;
}

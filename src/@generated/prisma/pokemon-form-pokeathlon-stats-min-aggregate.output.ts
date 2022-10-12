import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_form_pokeathlon_statsMinAggregate {

    @Field(() => Int, {nullable:true})
    pokemon_form_id?: number;

    @Field(() => Int, {nullable:true})
    pokeathlon_stat_id?: number;

    @Field(() => Int, {nullable:true})
    minimum_stat?: number;

    @Field(() => Int, {nullable:true})
    base_stat?: number;

    @Field(() => Int, {nullable:true})
    maximum_stat?: number;
}

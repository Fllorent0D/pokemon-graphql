import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_form_pokeathlon_statsCountAggregate {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_id!: number;

    @Field(() => Int, {nullable:false})
    minimum_stat!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    maximum_stat!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

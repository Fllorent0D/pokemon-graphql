import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_form_namesCountAggregate {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => Int, {nullable:false})
    form_name!: number;

    @Field(() => Int, {nullable:false})
    pokemon_name!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_form_namesMaxAggregate {

    @Field(() => Int, {nullable:true})
    pokemon_form_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;

    @Field(() => String, {nullable:true})
    form_name?: string;

    @Field(() => String, {nullable:true})
    pokemon_name?: string;
}

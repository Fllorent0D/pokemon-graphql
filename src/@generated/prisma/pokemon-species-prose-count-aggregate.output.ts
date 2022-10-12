import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_species_proseCountAggregate {

    @Field(() => Int, {nullable:false})
    pokemon_species_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => Int, {nullable:false})
    form_description!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

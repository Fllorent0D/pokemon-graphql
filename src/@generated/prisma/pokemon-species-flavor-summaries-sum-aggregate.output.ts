import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_species_flavor_summariesSumAggregate {

    @Field(() => Int, {nullable:true})
    pokemon_species_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}

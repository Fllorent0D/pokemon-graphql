import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_species_flavor_textSumAggregate {

    @Field(() => Int, {nullable:true})
    species_id?: number;

    @Field(() => Int, {nullable:true})
    version_id?: number;

    @Field(() => Int, {nullable:true})
    language_id?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_species_flavor_textCountAggregate {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => Int, {nullable:false})
    flavor_text!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

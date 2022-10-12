import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_species_flavor_textAvgAggregate {

    @Field(() => Float, {nullable:true})
    species_id?: number;

    @Field(() => Float, {nullable:true})
    version_id?: number;

    @Field(() => Float, {nullable:true})
    language_id?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_dex_numbersMinAggregate {

    @Field(() => Int, {nullable:true})
    species_id?: number;

    @Field(() => Int, {nullable:true})
    pokedex_id?: number;

    @Field(() => Int, {nullable:true})
    pokedex_number?: number;
}

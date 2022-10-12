import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_form_pokeathlon_statsAvgAggregate {

    @Field(() => Float, {nullable:true})
    pokemon_form_id?: number;

    @Field(() => Float, {nullable:true})
    pokeathlon_stat_id?: number;

    @Field(() => Float, {nullable:true})
    minimum_stat?: number;

    @Field(() => Float, {nullable:true})
    base_stat?: number;

    @Field(() => Float, {nullable:true})
    maximum_stat?: number;
}

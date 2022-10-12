import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsWhereInput } from '../pokemon-stats/pokemon-stats-where.input';

@InputType()
export class Pokemon_statsListRelationFilter {

    @Field(() => pokemon_statsWhereInput, {nullable:true})
    every?: pokemon_statsWhereInput;

    @Field(() => pokemon_statsWhereInput, {nullable:true})
    some?: pokemon_statsWhereInput;

    @Field(() => pokemon_statsWhereInput, {nullable:true})
    none?: pokemon_statsWhereInput;
}

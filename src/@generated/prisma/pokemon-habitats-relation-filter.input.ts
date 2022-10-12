import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitatsWhereInput } from '../pokemon-habitats/pokemon-habitats-where.input';

@InputType()
export class Pokemon_habitatsRelationFilter {

    @Field(() => pokemon_habitatsWhereInput, {nullable:true})
    is?: pokemon_habitatsWhereInput;

    @Field(() => pokemon_habitatsWhereInput, {nullable:true})
    isNot?: pokemon_habitatsWhereInput;
}

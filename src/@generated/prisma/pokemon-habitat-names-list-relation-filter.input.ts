import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereInput } from '../pokemon-habitat-names/pokemon-habitat-names-where.input';

@InputType()
export class Pokemon_habitat_namesListRelationFilter {

    @Field(() => pokemon_habitat_namesWhereInput, {nullable:true})
    every?: pokemon_habitat_namesWhereInput;

    @Field(() => pokemon_habitat_namesWhereInput, {nullable:true})
    some?: pokemon_habitat_namesWhereInput;

    @Field(() => pokemon_habitat_namesWhereInput, {nullable:true})
    none?: pokemon_habitat_namesWhereInput;
}

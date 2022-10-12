import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereInput } from '../pokemon-habitat-names/pokemon-habitat-names-where.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesOrderByWithRelationInput } from '../pokemon-habitat-names/pokemon-habitat-names-order-by-with-relation.input';
import { pokemon_habitat_namesWhereUniqueInput } from '../pokemon-habitat-names/pokemon-habitat-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatepokemonHabitatNamesArgs {

    @Field(() => pokemon_habitat_namesWhereInput, {nullable:true})
    @Type(() => pokemon_habitat_namesWhereInput)
    where?: pokemon_habitat_namesWhereInput;

    @Field(() => [pokemon_habitat_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_habitat_namesOrderByWithRelationInput>;

    @Field(() => pokemon_habitat_namesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_habitat_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

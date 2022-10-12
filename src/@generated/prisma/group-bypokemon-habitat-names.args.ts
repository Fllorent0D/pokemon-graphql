import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereInput } from '../pokemon-habitat-names/pokemon-habitat-names-where.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesOrderByWithAggregationInput } from '../pokemon-habitat-names/pokemon-habitat-names-order-by-with-aggregation.input';
import { Pokemon_habitat_namesScalarFieldEnum } from './pokemon-habitat-names-scalar-field.enum';
import { pokemon_habitat_namesScalarWhereWithAggregatesInput } from '../pokemon-habitat-names/pokemon-habitat-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonHabitatNamesArgs {

    @Field(() => pokemon_habitat_namesWhereInput, {nullable:true})
    @Type(() => pokemon_habitat_namesWhereInput)
    where?: pokemon_habitat_namesWhereInput;

    @Field(() => [pokemon_habitat_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_habitat_namesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_habitat_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_habitat_namesScalarFieldEnum>;

    @Field(() => pokemon_habitat_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_habitat_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

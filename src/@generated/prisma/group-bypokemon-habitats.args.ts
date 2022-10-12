import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitatsWhereInput } from '../pokemon-habitats/pokemon-habitats-where.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsOrderByWithAggregationInput } from '../pokemon-habitats/pokemon-habitats-order-by-with-aggregation.input';
import { Pokemon_habitatsScalarFieldEnum } from './pokemon-habitats-scalar-field.enum';
import { pokemon_habitatsScalarWhereWithAggregatesInput } from '../pokemon-habitats/pokemon-habitats-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonHabitatsArgs {

    @Field(() => pokemon_habitatsWhereInput, {nullable:true})
    @Type(() => pokemon_habitatsWhereInput)
    where?: pokemon_habitatsWhereInput;

    @Field(() => [pokemon_habitatsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_habitatsOrderByWithAggregationInput>;

    @Field(() => [Pokemon_habitatsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_habitatsScalarFieldEnum>;

    @Field(() => pokemon_habitatsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_habitatsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

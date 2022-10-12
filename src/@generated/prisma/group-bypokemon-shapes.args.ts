import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shapesWhereInput } from '../pokemon-shapes/pokemon-shapes-where.input';
import { Type } from 'class-transformer';
import { pokemon_shapesOrderByWithAggregationInput } from '../pokemon-shapes/pokemon-shapes-order-by-with-aggregation.input';
import { Pokemon_shapesScalarFieldEnum } from './pokemon-shapes-scalar-field.enum';
import { pokemon_shapesScalarWhereWithAggregatesInput } from '../pokemon-shapes/pokemon-shapes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonShapesArgs {

    @Field(() => pokemon_shapesWhereInput, {nullable:true})
    @Type(() => pokemon_shapesWhereInput)
    where?: pokemon_shapesWhereInput;

    @Field(() => [pokemon_shapesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_shapesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_shapesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_shapesScalarFieldEnum>;

    @Field(() => pokemon_shapesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_shapesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

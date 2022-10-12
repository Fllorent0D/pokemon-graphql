import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_colorsWhereInput } from '../pokemon-colors/pokemon-colors-where.input';
import { Type } from 'class-transformer';
import { pokemon_colorsOrderByWithAggregationInput } from '../pokemon-colors/pokemon-colors-order-by-with-aggregation.input';
import { Pokemon_colorsScalarFieldEnum } from './pokemon-colors-scalar-field.enum';
import { pokemon_colorsScalarWhereWithAggregatesInput } from '../pokemon-colors/pokemon-colors-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonColorsArgs {

    @Field(() => pokemon_colorsWhereInput, {nullable:true})
    @Type(() => pokemon_colorsWhereInput)
    where?: pokemon_colorsWhereInput;

    @Field(() => [pokemon_colorsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_colorsOrderByWithAggregationInput>;

    @Field(() => [Pokemon_colorsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_colorsScalarFieldEnum>;

    @Field(() => pokemon_colorsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_colorsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

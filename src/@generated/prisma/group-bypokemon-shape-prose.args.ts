import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereInput } from '../pokemon-shape-prose/pokemon-shape-prose-where.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseOrderByWithAggregationInput } from '../pokemon-shape-prose/pokemon-shape-prose-order-by-with-aggregation.input';
import { Pokemon_shape_proseScalarFieldEnum } from './pokemon-shape-prose-scalar-field.enum';
import { pokemon_shape_proseScalarWhereWithAggregatesInput } from '../pokemon-shape-prose/pokemon-shape-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonShapeProseArgs {

    @Field(() => pokemon_shape_proseWhereInput, {nullable:true})
    @Type(() => pokemon_shape_proseWhereInput)
    where?: pokemon_shape_proseWhereInput;

    @Field(() => [pokemon_shape_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_shape_proseOrderByWithAggregationInput>;

    @Field(() => [Pokemon_shape_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_shape_proseScalarFieldEnum>;

    @Field(() => pokemon_shape_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_shape_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

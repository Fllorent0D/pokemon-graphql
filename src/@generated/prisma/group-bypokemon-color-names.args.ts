import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_color_namesWhereInput } from '../pokemon-color-names/pokemon-color-names-where.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesOrderByWithAggregationInput } from '../pokemon-color-names/pokemon-color-names-order-by-with-aggregation.input';
import { Pokemon_color_namesScalarFieldEnum } from './pokemon-color-names-scalar-field.enum';
import { pokemon_color_namesScalarWhereWithAggregatesInput } from '../pokemon-color-names/pokemon-color-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonColorNamesArgs {

    @Field(() => pokemon_color_namesWhereInput, {nullable:true})
    @Type(() => pokemon_color_namesWhereInput)
    where?: pokemon_color_namesWhereInput;

    @Field(() => [pokemon_color_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_color_namesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_color_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_color_namesScalarFieldEnum>;

    @Field(() => pokemon_color_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_color_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

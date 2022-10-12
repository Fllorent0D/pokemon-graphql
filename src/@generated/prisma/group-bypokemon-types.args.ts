import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_typesWhereInput } from '../pokemon-types/pokemon-types-where.input';
import { Type } from 'class-transformer';
import { pokemon_typesOrderByWithAggregationInput } from '../pokemon-types/pokemon-types-order-by-with-aggregation.input';
import { Pokemon_typesScalarFieldEnum } from './pokemon-types-scalar-field.enum';
import { pokemon_typesScalarWhereWithAggregatesInput } from '../pokemon-types/pokemon-types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonTypesArgs {

    @Field(() => pokemon_typesWhereInput, {nullable:true})
    @Type(() => pokemon_typesWhereInput)
    where?: pokemon_typesWhereInput;

    @Field(() => [pokemon_typesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_typesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_typesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_typesScalarFieldEnum>;

    @Field(() => pokemon_typesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_typesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_statsWhereInput } from '../pokemon-stats/pokemon-stats-where.input';
import { Type } from 'class-transformer';
import { pokemon_statsOrderByWithAggregationInput } from '../pokemon-stats/pokemon-stats-order-by-with-aggregation.input';
import { Pokemon_statsScalarFieldEnum } from './pokemon-stats-scalar-field.enum';
import { pokemon_statsScalarWhereWithAggregatesInput } from '../pokemon-stats/pokemon-stats-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonStatsArgs {

    @Field(() => pokemon_statsWhereInput, {nullable:true})
    @Type(() => pokemon_statsWhereInput)
    where?: pokemon_statsWhereInput;

    @Field(() => [pokemon_statsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_statsOrderByWithAggregationInput>;

    @Field(() => [Pokemon_statsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_statsScalarFieldEnum>;

    @Field(() => pokemon_statsScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_statsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

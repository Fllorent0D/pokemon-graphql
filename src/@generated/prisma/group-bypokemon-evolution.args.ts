import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_evolutionWhereInput } from '../pokemon-evolution/pokemon-evolution-where.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionOrderByWithAggregationInput } from '../pokemon-evolution/pokemon-evolution-order-by-with-aggregation.input';
import { Pokemon_evolutionScalarFieldEnum } from './pokemon-evolution-scalar-field.enum';
import { pokemon_evolutionScalarWhereWithAggregatesInput } from '../pokemon-evolution/pokemon-evolution-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonEvolutionArgs {

    @Field(() => pokemon_evolutionWhereInput, {nullable:true})
    @Type(() => pokemon_evolutionWhereInput)
    where?: pokemon_evolutionWhereInput;

    @Field(() => [pokemon_evolutionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_evolutionOrderByWithAggregationInput>;

    @Field(() => [Pokemon_evolutionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_evolutionScalarFieldEnum>;

    @Field(() => pokemon_evolutionScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_evolutionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

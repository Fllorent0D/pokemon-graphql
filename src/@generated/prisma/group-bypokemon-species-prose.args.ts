import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_proseWhereInput } from '../pokemon-species-prose/pokemon-species-prose-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseOrderByWithAggregationInput } from '../pokemon-species-prose/pokemon-species-prose-order-by-with-aggregation.input';
import { Pokemon_species_proseScalarFieldEnum } from './pokemon-species-prose-scalar-field.enum';
import { pokemon_species_proseScalarWhereWithAggregatesInput } from '../pokemon-species-prose/pokemon-species-prose-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonSpeciesProseArgs {

    @Field(() => pokemon_species_proseWhereInput, {nullable:true})
    @Type(() => pokemon_species_proseWhereInput)
    where?: pokemon_species_proseWhereInput;

    @Field(() => [pokemon_species_proseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_species_proseOrderByWithAggregationInput>;

    @Field(() => [Pokemon_species_proseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_species_proseScalarFieldEnum>;

    @Field(() => pokemon_species_proseScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_species_proseScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

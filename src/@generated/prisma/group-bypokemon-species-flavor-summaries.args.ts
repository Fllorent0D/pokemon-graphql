import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesOrderByWithAggregationInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-order-by-with-aggregation.input';
import { Pokemon_species_flavor_summariesScalarFieldEnum } from './pokemon-species-flavor-summaries-scalar-field.enum';
import { pokemon_species_flavor_summariesScalarWhereWithAggregatesInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonSpeciesFlavorSummariesArgs {

    @Field(() => pokemon_species_flavor_summariesWhereInput, {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereInput)
    where?: pokemon_species_flavor_summariesWhereInput;

    @Field(() => [pokemon_species_flavor_summariesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_species_flavor_summariesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_species_flavor_summariesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_species_flavor_summariesScalarFieldEnum>;

    @Field(() => pokemon_species_flavor_summariesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_species_flavor_summariesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

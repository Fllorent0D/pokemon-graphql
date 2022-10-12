import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesOrderByWithRelationInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-order-by-with-relation.input';
import { pokemon_species_flavor_summariesWhereUniqueInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_species_flavor_summariesScalarFieldEnum } from './pokemon-species-flavor-summaries-scalar-field.enum';

@ArgsType()
export class FindManypokemonSpeciesFlavorSummariesArgs {

    @Field(() => pokemon_species_flavor_summariesWhereInput, {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereInput)
    where?: pokemon_species_flavor_summariesWhereInput;

    @Field(() => [pokemon_species_flavor_summariesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_species_flavor_summariesOrderByWithRelationInput>;

    @Field(() => pokemon_species_flavor_summariesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_species_flavor_summariesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_species_flavor_summariesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_species_flavor_summariesScalarFieldEnum>;
}

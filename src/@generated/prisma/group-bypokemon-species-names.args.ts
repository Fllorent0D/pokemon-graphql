import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_namesWhereInput } from '../pokemon-species-names/pokemon-species-names-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesOrderByWithAggregationInput } from '../pokemon-species-names/pokemon-species-names-order-by-with-aggregation.input';
import { Pokemon_species_namesScalarFieldEnum } from './pokemon-species-names-scalar-field.enum';
import { pokemon_species_namesScalarWhereWithAggregatesInput } from '../pokemon-species-names/pokemon-species-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonSpeciesNamesArgs {

    @Field(() => pokemon_species_namesWhereInput, {nullable:true})
    @Type(() => pokemon_species_namesWhereInput)
    where?: pokemon_species_namesWhereInput;

    @Field(() => [pokemon_species_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_species_namesOrderByWithAggregationInput>;

    @Field(() => [Pokemon_species_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_species_namesScalarFieldEnum>;

    @Field(() => pokemon_species_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_species_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

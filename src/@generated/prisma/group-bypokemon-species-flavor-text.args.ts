import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textOrderByWithAggregationInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-order-by-with-aggregation.input';
import { Pokemon_species_flavor_textScalarFieldEnum } from './pokemon-species-flavor-text-scalar-field.enum';
import { pokemon_species_flavor_textScalarWhereWithAggregatesInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypokemonSpeciesFlavorTextArgs {

    @Field(() => pokemon_species_flavor_textWhereInput, {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereInput)
    where?: pokemon_species_flavor_textWhereInput;

    @Field(() => [pokemon_species_flavor_textOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<pokemon_species_flavor_textOrderByWithAggregationInput>;

    @Field(() => [Pokemon_species_flavor_textScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Pokemon_species_flavor_textScalarFieldEnum>;

    @Field(() => pokemon_species_flavor_textScalarWhereWithAggregatesInput, {nullable:true})
    having?: pokemon_species_flavor_textScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

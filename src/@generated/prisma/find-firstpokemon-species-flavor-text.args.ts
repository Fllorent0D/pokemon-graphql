import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textOrderByWithRelationInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-order-by-with-relation.input';
import { pokemon_species_flavor_textWhereUniqueInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_species_flavor_textScalarFieldEnum } from './pokemon-species-flavor-text-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonSpeciesFlavorTextArgs {

    @Field(() => pokemon_species_flavor_textWhereInput, {nullable:true})
    @Type(() => pokemon_species_flavor_textWhereInput)
    where?: pokemon_species_flavor_textWhereInput;

    @Field(() => [pokemon_species_flavor_textOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_species_flavor_textOrderByWithRelationInput>;

    @Field(() => pokemon_species_flavor_textWhereUniqueInput, {nullable:true})
    cursor?: pokemon_species_flavor_textWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_species_flavor_textScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_species_flavor_textScalarFieldEnum>;
}

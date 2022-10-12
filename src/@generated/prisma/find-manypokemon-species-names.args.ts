import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_namesWhereInput } from '../pokemon-species-names/pokemon-species-names-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesOrderByWithRelationInput } from '../pokemon-species-names/pokemon-species-names-order-by-with-relation.input';
import { pokemon_species_namesWhereUniqueInput } from '../pokemon-species-names/pokemon-species-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_species_namesScalarFieldEnum } from './pokemon-species-names-scalar-field.enum';

@ArgsType()
export class FindManypokemonSpeciesNamesArgs {

    @Field(() => pokemon_species_namesWhereInput, {nullable:true})
    @Type(() => pokemon_species_namesWhereInput)
    where?: pokemon_species_namesWhereInput;

    @Field(() => [pokemon_species_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_species_namesOrderByWithRelationInput>;

    @Field(() => pokemon_species_namesWhereUniqueInput, {nullable:true})
    cursor?: pokemon_species_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_species_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_species_namesScalarFieldEnum>;
}

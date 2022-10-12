import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_proseWhereInput } from '../pokemon-species-prose/pokemon-species-prose-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseOrderByWithRelationInput } from '../pokemon-species-prose/pokemon-species-prose-order-by-with-relation.input';
import { pokemon_species_proseWhereUniqueInput } from '../pokemon-species-prose/pokemon-species-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Pokemon_species_proseScalarFieldEnum } from './pokemon-species-prose-scalar-field.enum';

@ArgsType()
export class FindFirstpokemonSpeciesProseArgs {

    @Field(() => pokemon_species_proseWhereInput, {nullable:true})
    @Type(() => pokemon_species_proseWhereInput)
    where?: pokemon_species_proseWhereInput;

    @Field(() => [pokemon_species_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<pokemon_species_proseOrderByWithRelationInput>;

    @Field(() => pokemon_species_proseWhereUniqueInput, {nullable:true})
    cursor?: pokemon_species_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Pokemon_species_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Pokemon_species_proseScalarFieldEnum>;
}

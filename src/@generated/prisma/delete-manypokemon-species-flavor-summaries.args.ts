import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonSpeciesFlavorSummariesArgs {

    @Field(() => pokemon_species_flavor_summariesWhereInput, {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereInput)
    where?: pokemon_species_flavor_summariesWhereInput;
}

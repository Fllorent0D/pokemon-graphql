import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereUniqueInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonSpeciesFlavorSummariesArgs {

    @Field(() => pokemon_species_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    where!: pokemon_species_flavor_summariesWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesCreateInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonSpeciesFlavorSummariesArgs {

    @Field(() => pokemon_species_flavor_summariesCreateInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesCreateInput)
    data!: pokemon_species_flavor_summariesCreateInput;
}

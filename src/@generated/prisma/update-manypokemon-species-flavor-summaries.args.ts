import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesUpdateManyMutationInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesWhereInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where.input';

@ArgsType()
export class UpdateManypokemonSpeciesFlavorSummariesArgs {

    @Field(() => pokemon_species_flavor_summariesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesUpdateManyMutationInput)
    data!: pokemon_species_flavor_summariesUpdateManyMutationInput;

    @Field(() => pokemon_species_flavor_summariesWhereInput, {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereInput)
    where?: pokemon_species_flavor_summariesWhereInput;
}

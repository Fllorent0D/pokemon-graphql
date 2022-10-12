import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesUpdateInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-update.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesWhereUniqueInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where-unique.input';

@ArgsType()
export class UpdateOnepokemonSpeciesFlavorSummariesArgs {

    @Field(() => pokemon_species_flavor_summariesUpdateInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesUpdateInput)
    data!: pokemon_species_flavor_summariesUpdateInput;

    @Field(() => pokemon_species_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    where!: pokemon_species_flavor_summariesWhereUniqueInput;
}

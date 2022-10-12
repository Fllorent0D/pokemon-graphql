import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereUniqueInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesCreateInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-create.input';
import { pokemon_species_flavor_summariesUpdateInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-update.input';

@ArgsType()
export class UpsertOnepokemonSpeciesFlavorSummariesArgs {

    @Field(() => pokemon_species_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    where!: pokemon_species_flavor_summariesWhereUniqueInput;

    @Field(() => pokemon_species_flavor_summariesCreateInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesCreateInput)
    create!: pokemon_species_flavor_summariesCreateInput;

    @Field(() => pokemon_species_flavor_summariesUpdateInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesUpdateInput)
    update!: pokemon_species_flavor_summariesUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereInput } from '../pokemon-species-flavor-summaries/pokemon-species-flavor-summaries-where.input';

@InputType()
export class Pokemon_species_flavor_summariesListRelationFilter {

    @Field(() => pokemon_species_flavor_summariesWhereInput, {nullable:true})
    every?: pokemon_species_flavor_summariesWhereInput;

    @Field(() => pokemon_species_flavor_summariesWhereInput, {nullable:true})
    some?: pokemon_species_flavor_summariesWhereInput;

    @Field(() => pokemon_species_flavor_summariesWhereInput, {nullable:true})
    none?: pokemon_species_flavor_summariesWhereInput;
}

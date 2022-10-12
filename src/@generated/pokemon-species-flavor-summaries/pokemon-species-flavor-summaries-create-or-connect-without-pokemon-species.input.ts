import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesWhereUniqueInput } from './pokemon-species-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput } from './pokemon-species-flavor-summaries-create-without-pokemon-species.input';

@InputType()
export class pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => pokemon_species_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    where!: pokemon_species_flavor_summariesWhereUniqueInput;

    @Field(() => pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput)
    create!: pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutPokemon_species_flavor_summariesInput } from './pokemon-species-update-without-pokemon-species-flavor-summaries.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_species_flavor_summariesInput } from './pokemon-species-create-without-pokemon-species-flavor-summaries.input';

@InputType()
export class pokemon_speciesUpsertWithoutPokemon_species_flavor_summariesInput {

    @Field(() => pokemon_speciesUpdateWithoutPokemon_species_flavor_summariesInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_species_flavor_summariesInput)
    update!: pokemon_speciesUpdateWithoutPokemon_species_flavor_summariesInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_flavor_summariesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_flavor_summariesInput)
    create!: pokemon_speciesCreateWithoutPokemon_species_flavor_summariesInput;
}

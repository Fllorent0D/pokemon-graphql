import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutPokemon_species_proseInput } from './pokemon-species-update-without-pokemon-species-prose.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_species_proseInput } from './pokemon-species-create-without-pokemon-species-prose.input';

@InputType()
export class pokemon_speciesUpsertWithoutPokemon_species_proseInput {

    @Field(() => pokemon_speciesUpdateWithoutPokemon_species_proseInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_species_proseInput)
    update!: pokemon_speciesUpdateWithoutPokemon_species_proseInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_proseInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_proseInput)
    create!: pokemon_speciesCreateWithoutPokemon_species_proseInput;
}

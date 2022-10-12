import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutPokemon_species_namesInput } from './pokemon-species-update-without-pokemon-species-names.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_species_namesInput } from './pokemon-species-create-without-pokemon-species-names.input';

@InputType()
export class pokemon_speciesUpsertWithoutPokemon_species_namesInput {

    @Field(() => pokemon_speciesUpdateWithoutPokemon_species_namesInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_species_namesInput)
    update!: pokemon_speciesUpdateWithoutPokemon_species_namesInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_namesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_namesInput)
    create!: pokemon_speciesCreateWithoutPokemon_species_namesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutPokemon_species_flavor_textInput } from './pokemon-species-update-without-pokemon-species-flavor-text.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_species_flavor_textInput } from './pokemon-species-create-without-pokemon-species-flavor-text.input';

@InputType()
export class pokemon_speciesUpsertWithoutPokemon_species_flavor_textInput {

    @Field(() => pokemon_speciesUpdateWithoutPokemon_species_flavor_textInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_species_flavor_textInput)
    update!: pokemon_speciesUpdateWithoutPokemon_species_flavor_textInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_flavor_textInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_flavor_textInput)
    create!: pokemon_speciesCreateWithoutPokemon_species_flavor_textInput;
}

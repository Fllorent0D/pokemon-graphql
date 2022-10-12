import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutPokemonInput } from './pokemon-species-update-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';

@InputType()
export class pokemon_speciesUpsertWithoutPokemonInput {

    @Field(() => pokemon_speciesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemonInput)
    update!: pokemon_speciesUpdateWithoutPokemonInput;

    @Field(() => pokemon_speciesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemonInput)
    create!: pokemon_speciesCreateWithoutPokemonInput;
}

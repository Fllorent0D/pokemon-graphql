import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateWithoutPokemon_dex_numbersInput } from './pokemon-species-update-without-pokemon-dex-numbers.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_dex_numbersInput } from './pokemon-species-create-without-pokemon-dex-numbers.input';

@InputType()
export class pokemon_speciesUpsertWithoutPokemon_dex_numbersInput {

    @Field(() => pokemon_speciesUpdateWithoutPokemon_dex_numbersInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_dex_numbersInput)
    update!: pokemon_speciesUpdateWithoutPokemon_dex_numbersInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_dex_numbersInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_dex_numbersInput)
    create!: pokemon_speciesCreateWithoutPokemon_dex_numbersInput;
}

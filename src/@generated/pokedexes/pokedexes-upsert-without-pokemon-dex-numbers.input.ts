import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesUpdateWithoutPokemon_dex_numbersInput } from './pokedexes-update-without-pokemon-dex-numbers.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutPokemon_dex_numbersInput } from './pokedexes-create-without-pokemon-dex-numbers.input';

@InputType()
export class pokedexesUpsertWithoutPokemon_dex_numbersInput {

    @Field(() => pokedexesUpdateWithoutPokemon_dex_numbersInput, {nullable:false})
    @Type(() => pokedexesUpdateWithoutPokemon_dex_numbersInput)
    update!: pokedexesUpdateWithoutPokemon_dex_numbersInput;

    @Field(() => pokedexesCreateWithoutPokemon_dex_numbersInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutPokemon_dex_numbersInput)
    create!: pokedexesCreateWithoutPokemon_dex_numbersInput;
}

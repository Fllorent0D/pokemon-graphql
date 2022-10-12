import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokedexesCreateNestedOneWithoutPokemon_dex_numbersInput } from '../pokedexes/pokedexes-create-nested-one-without-pokemon-dex-numbers.input';

@InputType()
export class pokemon_dex_numbersCreateWithoutPokemon_speciesInput {

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => pokedexesCreateNestedOneWithoutPokemon_dex_numbersInput, {nullable:false})
    pokedexes!: pokedexesCreateNestedOneWithoutPokemon_dex_numbersInput;
}

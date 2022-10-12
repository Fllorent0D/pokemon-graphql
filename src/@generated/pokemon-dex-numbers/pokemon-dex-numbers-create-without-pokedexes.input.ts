import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedOneWithoutPokemon_dex_numbersInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-dex-numbers.input';

@InputType()
export class pokemon_dex_numbersCreateWithoutPokedexesInput {

    @Field(() => Int, {nullable:false})
    pokedex_number!: number;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_dex_numbersInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_dex_numbersInput;
}

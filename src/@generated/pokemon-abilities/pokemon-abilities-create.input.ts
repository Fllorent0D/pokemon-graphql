import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { abilitiesCreateNestedOneWithoutPokemon_abilitiesInput } from '../abilities/abilities-create-nested-one-without-pokemon-abilities.input';
import { pokemonCreateNestedOneWithoutPokemon_abilitiesInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-abilities.input';

@InputType()
export class pokemon_abilitiesCreateInput {

    @Field(() => Boolean, {nullable:false})
    is_dream!: boolean;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => abilitiesCreateNestedOneWithoutPokemon_abilitiesInput, {nullable:false})
    abilities!: abilitiesCreateNestedOneWithoutPokemon_abilitiesInput;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_abilitiesInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_abilitiesInput;
}

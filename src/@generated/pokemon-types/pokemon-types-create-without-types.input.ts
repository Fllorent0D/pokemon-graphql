import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonCreateNestedOneWithoutPokemon_typesInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-types.input';

@InputType()
export class pokemon_typesCreateWithoutTypesInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_typesInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_typesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { typesCreateNestedOneWithoutPokemon_typesInput } from '../types/types-create-nested-one-without-pokemon-types.input';
import { pokemonCreateNestedOneWithoutPokemon_typesInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-types.input';

@InputType()
export class pokemon_typesCreateInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => typesCreateNestedOneWithoutPokemon_typesInput, {nullable:false})
    types!: typesCreateNestedOneWithoutPokemon_typesInput;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_typesInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_typesInput;
}

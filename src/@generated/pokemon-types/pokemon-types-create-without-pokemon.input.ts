import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { typesCreateNestedOneWithoutPokemon_typesInput } from '../types/types-create-nested-one-without-pokemon-types.input';

@InputType()
export class pokemon_typesCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => typesCreateNestedOneWithoutPokemon_typesInput, {nullable:false})
    types!: typesCreateNestedOneWithoutPokemon_typesInput;
}

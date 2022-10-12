import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonCreateNestedOneWithoutPokemon_abilitiesInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-abilities.input';

@InputType()
export class pokemon_abilitiesCreateWithoutAbilitiesInput {

    @Field(() => Boolean, {nullable:false})
    is_dream!: boolean;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_abilitiesInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_abilitiesInput;
}

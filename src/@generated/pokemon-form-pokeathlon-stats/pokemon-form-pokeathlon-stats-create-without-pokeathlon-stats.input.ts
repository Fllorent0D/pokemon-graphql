import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_formsCreateNestedOneWithoutPokemon_form_pokeathlon_statsInput } from '../pokemon-forms/pokemon-forms-create-nested-one-without-pokemon-form-pokeathlon-stats.input';

@InputType()
export class pokemon_form_pokeathlon_statsCreateWithoutPokeathlon_statsInput {

    @Field(() => Int, {nullable:false})
    minimum_stat!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    maximum_stat!: number;

    @Field(() => pokemon_formsCreateNestedOneWithoutPokemon_form_pokeathlon_statsInput, {nullable:false})
    pokemon_forms!: pokemon_formsCreateNestedOneWithoutPokemon_form_pokeathlon_statsInput;
}

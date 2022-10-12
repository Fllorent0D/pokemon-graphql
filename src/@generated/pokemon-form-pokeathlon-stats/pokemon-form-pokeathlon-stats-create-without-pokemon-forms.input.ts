import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokeathlon_statsCreateNestedOneWithoutPokemon_form_pokeathlon_statsInput } from '../pokeathlon-stats/pokeathlon-stats-create-nested-one-without-pokemon-form-pokeathlon-stats.input';

@InputType()
export class pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput {

    @Field(() => Int, {nullable:false})
    minimum_stat!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    maximum_stat!: number;

    @Field(() => pokeathlon_statsCreateNestedOneWithoutPokemon_form_pokeathlon_statsInput, {nullable:false})
    pokeathlon_stats!: pokeathlon_statsCreateNestedOneWithoutPokemon_form_pokeathlon_statsInput;
}

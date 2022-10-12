import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemonCreateNestedOneWithoutPokemon_statsInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-stats.input';

@InputType()
export class pokemon_statsCreateWithoutStatsInput {

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_statsInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_statsInput;
}

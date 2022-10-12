import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { statsCreateNestedOneWithoutPokemon_statsInput } from '../stats/stats-create-nested-one-without-pokemon-stats.input';

@InputType()
export class pokemon_statsCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;

    @Field(() => statsCreateNestedOneWithoutPokemon_statsInput, {nullable:false})
    stats!: statsCreateNestedOneWithoutPokemon_statsInput;
}

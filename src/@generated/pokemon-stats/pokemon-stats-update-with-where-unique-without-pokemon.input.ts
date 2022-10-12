import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_statsUpdateWithoutPokemonInput } from './pokemon-stats-update-without-pokemon.input';

@InputType()
export class pokemon_statsUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;

    @Field(() => pokemon_statsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_statsUpdateWithoutPokemonInput)
    data!: pokemon_statsUpdateWithoutPokemonInput;
}

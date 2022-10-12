import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesUpdateWithoutPokemonInput } from './pokemon-abilities-update-without-pokemon.input';
import { pokemon_abilitiesCreateWithoutPokemonInput } from './pokemon-abilities-create-without-pokemon.input';

@InputType()
export class pokemon_abilitiesUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => pokemon_abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_abilitiesWhereUniqueInput)
    where!: pokemon_abilitiesWhereUniqueInput;

    @Field(() => pokemon_abilitiesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_abilitiesUpdateWithoutPokemonInput)
    update!: pokemon_abilitiesUpdateWithoutPokemonInput;

    @Field(() => pokemon_abilitiesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_abilitiesCreateWithoutPokemonInput)
    create!: pokemon_abilitiesCreateWithoutPokemonInput;
}

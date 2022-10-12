import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_statsUpdateWithoutPokemonInput } from './pokemon-stats-update-without-pokemon.input';
import { pokemon_statsCreateWithoutPokemonInput } from './pokemon-stats-create-without-pokemon.input';

@InputType()
export class pokemon_statsUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;

    @Field(() => pokemon_statsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_statsUpdateWithoutPokemonInput)
    update!: pokemon_statsUpdateWithoutPokemonInput;

    @Field(() => pokemon_statsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_statsCreateWithoutPokemonInput)
    create!: pokemon_statsCreateWithoutPokemonInput;
}

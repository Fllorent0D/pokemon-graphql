import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_statsCreateWithoutPokemonInput } from './pokemon-stats-create-without-pokemon.input';

@InputType()
export class pokemon_statsCreateOrConnectWithoutPokemonInput {

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;

    @Field(() => pokemon_statsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_statsCreateWithoutPokemonInput)
    create!: pokemon_statsCreateWithoutPokemonInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutPokemonInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemonInput)
    create!: pokemon_speciesCreateWithoutPokemonInput;
}

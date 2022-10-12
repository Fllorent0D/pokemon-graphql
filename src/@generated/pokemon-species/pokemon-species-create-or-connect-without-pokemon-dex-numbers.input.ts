import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_dex_numbersInput } from './pokemon-species-create-without-pokemon-dex-numbers.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutPokemon_dex_numbersInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_dex_numbersInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_dex_numbersInput)
    create!: pokemon_speciesCreateWithoutPokemon_dex_numbersInput;
}

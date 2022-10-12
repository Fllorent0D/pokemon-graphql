import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersCreateWithoutPokemon_speciesInput } from './pokemon-dex-numbers-create-without-pokemon-species.input';

@InputType()
export class pokemon_dex_numbersCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => pokemon_dex_numbersWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    where!: pokemon_dex_numbersWhereUniqueInput;

    @Field(() => pokemon_dex_numbersCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_dex_numbersCreateWithoutPokemon_speciesInput)
    create!: pokemon_dex_numbersCreateWithoutPokemon_speciesInput;
}

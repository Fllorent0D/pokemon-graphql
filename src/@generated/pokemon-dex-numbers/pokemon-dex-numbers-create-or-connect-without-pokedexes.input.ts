import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersCreateWithoutPokedexesInput } from './pokemon-dex-numbers-create-without-pokedexes.input';

@InputType()
export class pokemon_dex_numbersCreateOrConnectWithoutPokedexesInput {

    @Field(() => pokemon_dex_numbersWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    where!: pokemon_dex_numbersWhereUniqueInput;

    @Field(() => pokemon_dex_numbersCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => pokemon_dex_numbersCreateWithoutPokedexesInput)
    create!: pokemon_dex_numbersCreateWithoutPokedexesInput;
}

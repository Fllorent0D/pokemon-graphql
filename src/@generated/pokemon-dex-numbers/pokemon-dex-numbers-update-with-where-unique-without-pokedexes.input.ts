import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersUpdateWithoutPokedexesInput } from './pokemon-dex-numbers-update-without-pokedexes.input';

@InputType()
export class pokemon_dex_numbersUpdateWithWhereUniqueWithoutPokedexesInput {

    @Field(() => pokemon_dex_numbersWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_dex_numbersWhereUniqueInput)
    where!: pokemon_dex_numbersWhereUniqueInput;

    @Field(() => pokemon_dex_numbersUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => pokemon_dex_numbersUpdateWithoutPokedexesInput)
    data!: pokemon_dex_numbersUpdateWithoutPokedexesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { pokedexesCreateWithoutPokemon_dex_numbersInput } from './pokedexes-create-without-pokemon-dex-numbers.input';

@InputType()
export class pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput {

    @Field(() => pokedexesWhereUniqueInput, {nullable:false})
    @Type(() => pokedexesWhereUniqueInput)
    where!: pokedexesWhereUniqueInput;

    @Field(() => pokedexesCreateWithoutPokemon_dex_numbersInput, {nullable:false})
    @Type(() => pokedexesCreateWithoutPokemon_dex_numbersInput)
    create!: pokedexesCreateWithoutPokemon_dex_numbersInput;
}

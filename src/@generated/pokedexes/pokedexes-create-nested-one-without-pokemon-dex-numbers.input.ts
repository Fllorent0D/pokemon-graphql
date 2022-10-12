import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutPokemon_dex_numbersInput } from './pokedexes-create-without-pokemon-dex-numbers.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput } from './pokedexes-create-or-connect-without-pokemon-dex-numbers.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class pokedexesCreateNestedOneWithoutPokemon_dex_numbersInput {

    @Field(() => pokedexesCreateWithoutPokemon_dex_numbersInput, {nullable:true})
    @Type(() => pokedexesCreateWithoutPokemon_dex_numbersInput)
    create?: pokedexesCreateWithoutPokemon_dex_numbersInput;

    @Field(() => pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput, {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput)
    connectOrCreate?: pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: pokedexesWhereUniqueInput;
}

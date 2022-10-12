import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutPokemon_dex_numbersInput } from './pokedexes-create-without-pokemon-dex-numbers.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput } from './pokedexes-create-or-connect-without-pokemon-dex-numbers.input';
import { pokedexesUpsertWithoutPokemon_dex_numbersInput } from './pokedexes-upsert-without-pokemon-dex-numbers.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { pokedexesUpdateWithoutPokemon_dex_numbersInput } from './pokedexes-update-without-pokemon-dex-numbers.input';

@InputType()
export class pokedexesUpdateOneRequiredWithoutPokemon_dex_numbersNestedInput {

    @Field(() => pokedexesCreateWithoutPokemon_dex_numbersInput, {nullable:true})
    @Type(() => pokedexesCreateWithoutPokemon_dex_numbersInput)
    create?: pokedexesCreateWithoutPokemon_dex_numbersInput;

    @Field(() => pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput, {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput)
    connectOrCreate?: pokedexesCreateOrConnectWithoutPokemon_dex_numbersInput;

    @Field(() => pokedexesUpsertWithoutPokemon_dex_numbersInput, {nullable:true})
    @Type(() => pokedexesUpsertWithoutPokemon_dex_numbersInput)
    upsert?: pokedexesUpsertWithoutPokemon_dex_numbersInput;

    @Field(() => pokedexesWhereUniqueInput, {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: pokedexesWhereUniqueInput;

    @Field(() => pokedexesUpdateWithoutPokemon_dex_numbersInput, {nullable:true})
    @Type(() => pokedexesUpdateWithoutPokemon_dex_numbersInput)
    update?: pokedexesUpdateWithoutPokemon_dex_numbersInput;
}

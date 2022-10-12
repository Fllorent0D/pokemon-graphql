import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_dex_numbersInput } from './pokemon-species-create-without-pokemon-dex-numbers.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_dex_numbersInput } from './pokemon-species-create-or-connect-without-pokemon-dex-numbers.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesCreateNestedOneWithoutPokemon_dex_numbersInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_dex_numbersInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_dex_numbersInput)
    create?: pokemon_speciesCreateWithoutPokemon_dex_numbersInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_dex_numbersInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_dex_numbersInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_dex_numbersInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;
}

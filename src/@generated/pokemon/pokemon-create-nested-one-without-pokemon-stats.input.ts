import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_statsInput } from './pokemon-create-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_statsInput } from './pokemon-create-or-connect-without-pokemon-stats.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class pokemonCreateNestedOneWithoutPokemon_statsInput {

    @Field(() => pokemonCreateWithoutPokemon_statsInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_statsInput)
    create?: pokemonCreateWithoutPokemon_statsInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_statsInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_statsInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_statsInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;
}

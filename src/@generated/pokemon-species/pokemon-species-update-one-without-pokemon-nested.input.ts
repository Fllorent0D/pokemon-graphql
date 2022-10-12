import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemonInput } from './pokemon-species-create-or-connect-without-pokemon.input';
import { pokemon_speciesUpsertWithoutPokemonInput } from './pokemon-species-upsert-without-pokemon.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithoutPokemonInput } from './pokemon-species-update-without-pokemon.input';

@InputType()
export class pokemon_speciesUpdateOneWithoutPokemonNestedInput {

    @Field(() => pokemon_speciesCreateWithoutPokemonInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemonInput)
    create?: pokemon_speciesCreateWithoutPokemonInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemonInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemonInput;

    @Field(() => pokemon_speciesUpsertWithoutPokemonInput, {nullable:true})
    @Type(() => pokemon_speciesUpsertWithoutPokemonInput)
    upsert?: pokemon_speciesUpsertWithoutPokemonInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutPokemonInput, {nullable:true})
    @Type(() => pokemon_speciesUpdateWithoutPokemonInput)
    update?: pokemon_speciesUpdateWithoutPokemonInput;
}

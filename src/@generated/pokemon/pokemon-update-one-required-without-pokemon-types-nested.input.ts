import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_typesInput } from './pokemon-create-without-pokemon-types.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_typesInput } from './pokemon-create-or-connect-without-pokemon-types.input';
import { pokemonUpsertWithoutPokemon_typesInput } from './pokemon-upsert-without-pokemon-types.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { pokemonUpdateWithoutPokemon_typesInput } from './pokemon-update-without-pokemon-types.input';

@InputType()
export class pokemonUpdateOneRequiredWithoutPokemon_typesNestedInput {

    @Field(() => pokemonCreateWithoutPokemon_typesInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_typesInput)
    create?: pokemonCreateWithoutPokemon_typesInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_typesInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_typesInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_typesInput;

    @Field(() => pokemonUpsertWithoutPokemon_typesInput, {nullable:true})
    @Type(() => pokemonUpsertWithoutPokemon_typesInput)
    upsert?: pokemonUpsertWithoutPokemon_typesInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;

    @Field(() => pokemonUpdateWithoutPokemon_typesInput, {nullable:true})
    @Type(() => pokemonUpdateWithoutPokemon_typesInput)
    update?: pokemonUpdateWithoutPokemon_typesInput;
}

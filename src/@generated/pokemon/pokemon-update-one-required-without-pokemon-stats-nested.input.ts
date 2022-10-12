import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_statsInput } from './pokemon-create-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_statsInput } from './pokemon-create-or-connect-without-pokemon-stats.input';
import { pokemonUpsertWithoutPokemon_statsInput } from './pokemon-upsert-without-pokemon-stats.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { pokemonUpdateWithoutPokemon_statsInput } from './pokemon-update-without-pokemon-stats.input';

@InputType()
export class pokemonUpdateOneRequiredWithoutPokemon_statsNestedInput {

    @Field(() => pokemonCreateWithoutPokemon_statsInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_statsInput)
    create?: pokemonCreateWithoutPokemon_statsInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_statsInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_statsInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_statsInput;

    @Field(() => pokemonUpsertWithoutPokemon_statsInput, {nullable:true})
    @Type(() => pokemonUpsertWithoutPokemon_statsInput)
    upsert?: pokemonUpsertWithoutPokemon_statsInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;

    @Field(() => pokemonUpdateWithoutPokemon_statsInput, {nullable:true})
    @Type(() => pokemonUpdateWithoutPokemon_statsInput)
    update?: pokemonUpdateWithoutPokemon_statsInput;
}

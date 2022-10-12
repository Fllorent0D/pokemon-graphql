import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_itemsInput } from './pokemon-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_itemsInput } from './pokemon-create-or-connect-without-pokemon-items.input';
import { pokemonUpsertWithoutPokemon_itemsInput } from './pokemon-upsert-without-pokemon-items.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { pokemonUpdateWithoutPokemon_itemsInput } from './pokemon-update-without-pokemon-items.input';

@InputType()
export class pokemonUpdateOneRequiredWithoutPokemon_itemsNestedInput {

    @Field(() => pokemonCreateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_itemsInput)
    create?: pokemonCreateWithoutPokemon_itemsInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_itemsInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_itemsInput;

    @Field(() => pokemonUpsertWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => pokemonUpsertWithoutPokemon_itemsInput)
    upsert?: pokemonUpsertWithoutPokemon_itemsInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;

    @Field(() => pokemonUpdateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => pokemonUpdateWithoutPokemon_itemsInput)
    update?: pokemonUpdateWithoutPokemon_itemsInput;
}

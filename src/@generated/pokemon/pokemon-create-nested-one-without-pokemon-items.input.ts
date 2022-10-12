import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonCreateWithoutPokemon_itemsInput } from './pokemon-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { pokemonCreateOrConnectWithoutPokemon_itemsInput } from './pokemon-create-or-connect-without-pokemon-items.input';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class pokemonCreateNestedOneWithoutPokemon_itemsInput {

    @Field(() => pokemonCreateWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => pokemonCreateWithoutPokemon_itemsInput)
    create?: pokemonCreateWithoutPokemon_itemsInput;

    @Field(() => pokemonCreateOrConnectWithoutPokemon_itemsInput, {nullable:true})
    @Type(() => pokemonCreateOrConnectWithoutPokemon_itemsInput)
    connectOrCreate?: pokemonCreateOrConnectWithoutPokemon_itemsInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:true})
    @Type(() => pokemonWhereUniqueInput)
    connect?: pokemonWhereUniqueInput;
}

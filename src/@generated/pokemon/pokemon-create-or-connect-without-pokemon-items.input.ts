import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_itemsInput } from './pokemon-create-without-pokemon-items.input';

@InputType()
export class pokemonCreateOrConnectWithoutPokemon_itemsInput {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonCreateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_itemsInput)
    create!: pokemonCreateWithoutPokemon_itemsInput;
}

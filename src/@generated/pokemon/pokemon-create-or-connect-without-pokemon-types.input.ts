import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_typesInput } from './pokemon-create-without-pokemon-types.input';

@InputType()
export class pokemonCreateOrConnectWithoutPokemon_typesInput {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonCreateWithoutPokemon_typesInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_typesInput)
    create!: pokemonCreateWithoutPokemon_typesInput;
}

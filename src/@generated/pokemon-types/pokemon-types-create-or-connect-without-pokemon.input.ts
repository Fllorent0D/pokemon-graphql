import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_typesCreateWithoutPokemonInput } from './pokemon-types-create-without-pokemon.input';

@InputType()
export class pokemon_typesCreateOrConnectWithoutPokemonInput {

    @Field(() => pokemon_typesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_typesWhereUniqueInput)
    where!: pokemon_typesWhereUniqueInput;

    @Field(() => pokemon_typesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_typesCreateWithoutPokemonInput)
    create!: pokemon_typesCreateWithoutPokemonInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsCreateWithoutPokemon_habitat_namesInput } from './pokemon-habitats-create-without-pokemon-habitat-names.input';

@InputType()
export class pokemon_habitatsCreateOrConnectWithoutPokemon_habitat_namesInput {

    @Field(() => pokemon_habitatsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitatsWhereUniqueInput)
    where!: pokemon_habitatsWhereUniqueInput;

    @Field(() => pokemon_habitatsCreateWithoutPokemon_habitat_namesInput, {nullable:false})
    @Type(() => pokemon_habitatsCreateWithoutPokemon_habitat_namesInput)
    create!: pokemon_habitatsCreateWithoutPokemon_habitat_namesInput;
}

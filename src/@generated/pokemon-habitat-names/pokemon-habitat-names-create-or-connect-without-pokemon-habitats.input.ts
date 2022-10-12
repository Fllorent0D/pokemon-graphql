import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereUniqueInput } from './pokemon-habitat-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesCreateWithoutPokemon_habitatsInput } from './pokemon-habitat-names-create-without-pokemon-habitats.input';

@InputType()
export class pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput {

    @Field(() => pokemon_habitat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    where!: pokemon_habitat_namesWhereUniqueInput;

    @Field(() => pokemon_habitat_namesCreateWithoutPokemon_habitatsInput, {nullable:false})
    @Type(() => pokemon_habitat_namesCreateWithoutPokemon_habitatsInput)
    create!: pokemon_habitat_namesCreateWithoutPokemon_habitatsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitatsUpdateWithoutPokemon_habitat_namesInput } from './pokemon-habitats-update-without-pokemon-habitat-names.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsCreateWithoutPokemon_habitat_namesInput } from './pokemon-habitats-create-without-pokemon-habitat-names.input';

@InputType()
export class pokemon_habitatsUpsertWithoutPokemon_habitat_namesInput {

    @Field(() => pokemon_habitatsUpdateWithoutPokemon_habitat_namesInput, {nullable:false})
    @Type(() => pokemon_habitatsUpdateWithoutPokemon_habitat_namesInput)
    update!: pokemon_habitatsUpdateWithoutPokemon_habitat_namesInput;

    @Field(() => pokemon_habitatsCreateWithoutPokemon_habitat_namesInput, {nullable:false})
    @Type(() => pokemon_habitatsCreateWithoutPokemon_habitat_namesInput)
    create!: pokemon_habitatsCreateWithoutPokemon_habitat_namesInput;
}

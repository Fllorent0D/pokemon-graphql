import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitatsCreateWithoutPokemon_habitat_namesInput } from './pokemon-habitats-create-without-pokemon-habitat-names.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsCreateOrConnectWithoutPokemon_habitat_namesInput } from './pokemon-habitats-create-or-connect-without-pokemon-habitat-names.input';
import { pokemon_habitatsUpsertWithoutPokemon_habitat_namesInput } from './pokemon-habitats-upsert-without-pokemon-habitat-names.input';
import { pokemon_habitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { pokemon_habitatsUpdateWithoutPokemon_habitat_namesInput } from './pokemon-habitats-update-without-pokemon-habitat-names.input';

@InputType()
export class pokemon_habitatsUpdateOneRequiredWithoutPokemon_habitat_namesNestedInput {

    @Field(() => pokemon_habitatsCreateWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => pokemon_habitatsCreateWithoutPokemon_habitat_namesInput)
    create?: pokemon_habitatsCreateWithoutPokemon_habitat_namesInput;

    @Field(() => pokemon_habitatsCreateOrConnectWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => pokemon_habitatsCreateOrConnectWithoutPokemon_habitat_namesInput)
    connectOrCreate?: pokemon_habitatsCreateOrConnectWithoutPokemon_habitat_namesInput;

    @Field(() => pokemon_habitatsUpsertWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => pokemon_habitatsUpsertWithoutPokemon_habitat_namesInput)
    upsert?: pokemon_habitatsUpsertWithoutPokemon_habitat_namesInput;

    @Field(() => pokemon_habitatsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_habitatsWhereUniqueInput)
    connect?: pokemon_habitatsWhereUniqueInput;

    @Field(() => pokemon_habitatsUpdateWithoutPokemon_habitat_namesInput, {nullable:true})
    @Type(() => pokemon_habitatsUpdateWithoutPokemon_habitat_namesInput)
    update?: pokemon_habitatsUpdateWithoutPokemon_habitat_namesInput;
}

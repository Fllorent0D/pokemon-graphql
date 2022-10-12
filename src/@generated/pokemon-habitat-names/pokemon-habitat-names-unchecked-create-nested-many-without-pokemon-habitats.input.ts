import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesCreateWithoutPokemon_habitatsInput } from './pokemon-habitat-names-create-without-pokemon-habitats.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput } from './pokemon-habitat-names-create-or-connect-without-pokemon-habitats.input';
import { pokemon_habitat_namesWhereUniqueInput } from './pokemon-habitat-names-where-unique.input';

@InputType()
export class pokemon_habitat_namesUncheckedCreateNestedManyWithoutPokemon_habitatsInput {

    @Field(() => [pokemon_habitat_namesCreateWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_habitat_namesCreateWithoutPokemon_habitatsInput)
    create?: Array<pokemon_habitat_namesCreateWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput], {nullable:true})
    @Type(() => pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput)
    connectOrCreate?: Array<pokemon_habitat_namesCreateOrConnectWithoutPokemon_habitatsInput>;

    @Field(() => [pokemon_habitat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    connect?: Array<pokemon_habitat_namesWhereUniqueInput>;
}

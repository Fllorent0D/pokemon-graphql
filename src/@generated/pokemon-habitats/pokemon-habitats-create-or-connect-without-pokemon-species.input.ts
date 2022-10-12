import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsCreateWithoutPokemon_speciesInput } from './pokemon-habitats-create-without-pokemon-species.input';

@InputType()
export class pokemon_habitatsCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => pokemon_habitatsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitatsWhereUniqueInput)
    where!: pokemon_habitatsWhereUniqueInput;

    @Field(() => pokemon_habitatsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_habitatsCreateWithoutPokemon_speciesInput)
    create!: pokemon_habitatsCreateWithoutPokemon_speciesInput;
}

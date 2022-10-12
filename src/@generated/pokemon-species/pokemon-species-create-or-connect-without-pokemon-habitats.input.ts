import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutPokemon_habitatsInput } from './pokemon-species-create-without-pokemon-habitats.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutPokemon_habitatsInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutPokemon_habitatsInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutPokemon_habitatsInput)
    create!: pokemon_speciesCreateWithoutPokemon_habitatsInput;
}

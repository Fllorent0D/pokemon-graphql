import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_typesUpdateWithoutPokemonInput } from './pokemon-types-update-without-pokemon.input';

@InputType()
export class pokemon_typesUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => pokemon_typesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_typesWhereUniqueInput)
    where!: pokemon_typesWhereUniqueInput;

    @Field(() => pokemon_typesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_typesUpdateWithoutPokemonInput)
    data!: pokemon_typesUpdateWithoutPokemonInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_formsUpdateWithoutPokemonInput } from './pokemon-forms-update-without-pokemon.input';

@InputType()
export class pokemon_formsUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_formsUpdateWithoutPokemonInput)
    data!: pokemon_formsUpdateWithoutPokemonInput;
}

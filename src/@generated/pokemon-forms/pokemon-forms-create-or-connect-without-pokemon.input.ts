import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateWithoutPokemonInput } from './pokemon-forms-create-without-pokemon.input';

@InputType()
export class pokemon_formsCreateOrConnectWithoutPokemonInput {

    @Field(() => pokemon_formsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_formsWhereUniqueInput)
    where!: pokemon_formsWhereUniqueInput;

    @Field(() => pokemon_formsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_formsCreateWithoutPokemonInput)
    create!: pokemon_formsCreateWithoutPokemonInput;
}

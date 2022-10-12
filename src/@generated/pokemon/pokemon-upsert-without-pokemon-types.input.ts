import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonUpdateWithoutPokemon_typesInput } from './pokemon-update-without-pokemon-types.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_typesInput } from './pokemon-create-without-pokemon-types.input';

@InputType()
export class pokemonUpsertWithoutPokemon_typesInput {

    @Field(() => pokemonUpdateWithoutPokemon_typesInput, {nullable:false})
    @Type(() => pokemonUpdateWithoutPokemon_typesInput)
    update!: pokemonUpdateWithoutPokemon_typesInput;

    @Field(() => pokemonCreateWithoutPokemon_typesInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_typesInput)
    create!: pokemonCreateWithoutPokemon_typesInput;
}

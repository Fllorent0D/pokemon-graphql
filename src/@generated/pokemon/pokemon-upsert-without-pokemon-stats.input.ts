import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonUpdateWithoutPokemon_statsInput } from './pokemon-update-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_statsInput } from './pokemon-create-without-pokemon-stats.input';

@InputType()
export class pokemonUpsertWithoutPokemon_statsInput {

    @Field(() => pokemonUpdateWithoutPokemon_statsInput, {nullable:false})
    @Type(() => pokemonUpdateWithoutPokemon_statsInput)
    update!: pokemonUpdateWithoutPokemon_statsInput;

    @Field(() => pokemonCreateWithoutPokemon_statsInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_statsInput)
    create!: pokemonCreateWithoutPokemon_statsInput;
}

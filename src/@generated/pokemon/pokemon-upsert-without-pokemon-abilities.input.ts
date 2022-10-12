import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonUpdateWithoutPokemon_abilitiesInput } from './pokemon-update-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_abilitiesInput } from './pokemon-create-without-pokemon-abilities.input';

@InputType()
export class pokemonUpsertWithoutPokemon_abilitiesInput {

    @Field(() => pokemonUpdateWithoutPokemon_abilitiesInput, {nullable:false})
    @Type(() => pokemonUpdateWithoutPokemon_abilitiesInput)
    update!: pokemonUpdateWithoutPokemon_abilitiesInput;

    @Field(() => pokemonCreateWithoutPokemon_abilitiesInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_abilitiesInput)
    create!: pokemonCreateWithoutPokemon_abilitiesInput;
}

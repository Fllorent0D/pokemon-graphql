import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonUpdateWithoutPokemon_itemsInput } from './pokemon-update-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { pokemonCreateWithoutPokemon_itemsInput } from './pokemon-create-without-pokemon-items.input';

@InputType()
export class pokemonUpsertWithoutPokemon_itemsInput {

    @Field(() => pokemonUpdateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => pokemonUpdateWithoutPokemon_itemsInput)
    update!: pokemonUpdateWithoutPokemon_itemsInput;

    @Field(() => pokemonCreateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => pokemonCreateWithoutPokemon_itemsInput)
    create!: pokemonCreateWithoutPokemon_itemsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_itemsUpdateWithoutPokemonInput } from './pokemon-items-update-without-pokemon.input';
import { pokemon_itemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';

@InputType()
export class pokemon_itemsUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;

    @Field(() => pokemon_itemsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_itemsUpdateWithoutPokemonInput)
    update!: pokemon_itemsUpdateWithoutPokemonInput;

    @Field(() => pokemon_itemsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => pokemon_itemsCreateWithoutPokemonInput)
    create!: pokemon_itemsCreateWithoutPokemonInput;
}

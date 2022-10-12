import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutPokemon_itemsInput } from '../items/items-create-nested-one-without-pokemon-items.input';
import { versionsCreateNestedOneWithoutPokemon_itemsInput } from '../versions/versions-create-nested-one-without-pokemon-items.input';
import { pokemonCreateNestedOneWithoutPokemon_itemsInput } from '../pokemon/pokemon-create-nested-one-without-pokemon-items.input';

@InputType()
export class pokemon_itemsCreateInput {

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => itemsCreateNestedOneWithoutPokemon_itemsInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutPokemon_itemsInput;

    @Field(() => versionsCreateNestedOneWithoutPokemon_itemsInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutPokemon_itemsInput;

    @Field(() => pokemonCreateNestedOneWithoutPokemon_itemsInput, {nullable:false})
    pokemon!: pokemonCreateNestedOneWithoutPokemon_itemsInput;
}

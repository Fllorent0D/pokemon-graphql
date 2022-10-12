import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutPokemon_itemsInput } from '../items/items-create-nested-one-without-pokemon-items.input';
import { versionsCreateNestedOneWithoutPokemon_itemsInput } from '../versions/versions-create-nested-one-without-pokemon-items.input';

@InputType()
export class pokemon_itemsCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    rarity!: number;

    @Field(() => itemsCreateNestedOneWithoutPokemon_itemsInput, {nullable:false})
    items!: itemsCreateNestedOneWithoutPokemon_itemsInput;

    @Field(() => versionsCreateNestedOneWithoutPokemon_itemsInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutPokemon_itemsInput;
}

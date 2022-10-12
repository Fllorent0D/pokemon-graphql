import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encountersUncheckedCreateNestedManyWithoutPokemonInput } from '../encounters/encounters-unchecked-create-nested-many-without-pokemon.input';
import { pokemon_abilitiesUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-abilities/pokemon-abilities-unchecked-create-nested-many-without-pokemon.input';
import { pokemon_formsUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-forms/pokemon-forms-unchecked-create-nested-many-without-pokemon.input';
import { pokemon_game_indicesUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-create-nested-many-without-pokemon.input';
import { pokemon_itemsUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-items/pokemon-items-unchecked-create-nested-many-without-pokemon.input';
import { pokemon_typesUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-types/pokemon-types-unchecked-create-nested-many-without-pokemon.input';

@InputType()
export class pokemonUncheckedCreateWithoutPokemon_statsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    species_id?: number;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Int, {nullable:false})
    weight!: number;

    @Field(() => Int, {nullable:false})
    base_experience!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Boolean, {nullable:false})
    is_default!: boolean;

    @Field(() => encountersUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    encounters?: encountersUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_abilitiesUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_formsUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_forms?: pokemon_formsUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_game_indicesUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_itemsUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_items?: pokemon_itemsUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_typesUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_types?: pokemon_typesUncheckedCreateNestedManyWithoutPokemonInput;
}

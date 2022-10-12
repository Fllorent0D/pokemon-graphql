import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encountersCreateNestedManyWithoutPokemonInput } from '../encounters/encounters-create-nested-many-without-pokemon.input';
import { pokemon_abilitiesCreateNestedManyWithoutPokemonInput } from '../pokemon-abilities/pokemon-abilities-create-nested-many-without-pokemon.input';
import { pokemon_formsCreateNestedManyWithoutPokemonInput } from '../pokemon-forms/pokemon-forms-create-nested-many-without-pokemon.input';
import { pokemon_game_indicesCreateNestedManyWithoutPokemonInput } from '../pokemon-game-indices/pokemon-game-indices-create-nested-many-without-pokemon.input';
import { pokemon_itemsCreateNestedManyWithoutPokemonInput } from '../pokemon-items/pokemon-items-create-nested-many-without-pokemon.input';
import { pokemon_statsCreateNestedManyWithoutPokemonInput } from '../pokemon-stats/pokemon-stats-create-nested-many-without-pokemon.input';
import { pokemon_typesCreateNestedManyWithoutPokemonInput } from '../pokemon-types/pokemon-types-create-nested-many-without-pokemon.input';

@InputType()
export class pokemonCreateWithoutPokemon_speciesInput {

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

    @Field(() => encountersCreateNestedManyWithoutPokemonInput, {nullable:true})
    encounters?: encountersCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_abilitiesCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_formsCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_forms?: pokemon_formsCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_game_indicesCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_itemsCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_items?: pokemon_itemsCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_statsCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_stats?: pokemon_statsCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_typesCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_types?: pokemon_typesCreateNestedManyWithoutPokemonInput;
}

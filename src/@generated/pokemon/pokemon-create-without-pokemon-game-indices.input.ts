import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedOneWithoutPokemonInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon.input';
import { encountersCreateNestedManyWithoutPokemonInput } from '../encounters/encounters-create-nested-many-without-pokemon.input';
import { pokemon_abilitiesCreateNestedManyWithoutPokemonInput } from '../pokemon-abilities/pokemon-abilities-create-nested-many-without-pokemon.input';
import { pokemon_formsCreateNestedManyWithoutPokemonInput } from '../pokemon-forms/pokemon-forms-create-nested-many-without-pokemon.input';
import { pokemon_itemsCreateNestedManyWithoutPokemonInput } from '../pokemon-items/pokemon-items-create-nested-many-without-pokemon.input';
import { pokemon_statsCreateNestedManyWithoutPokemonInput } from '../pokemon-stats/pokemon-stats-create-nested-many-without-pokemon.input';
import { pokemon_typesCreateNestedManyWithoutPokemonInput } from '../pokemon-types/pokemon-types-create-nested-many-without-pokemon.input';

@InputType()
export class pokemonCreateWithoutPokemon_game_indicesInput {

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

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemonInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedOneWithoutPokemonInput;

    @Field(() => encountersCreateNestedManyWithoutPokemonInput, {nullable:true})
    encounters?: encountersCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_abilitiesCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_formsCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_forms?: pokemon_formsCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_itemsCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_items?: pokemon_itemsCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_statsCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_stats?: pokemon_statsCreateNestedManyWithoutPokemonInput;

    @Field(() => pokemon_typesCreateNestedManyWithoutPokemonInput, {nullable:true})
    pokemon_types?: pokemon_typesCreateNestedManyWithoutPokemonInput;
}

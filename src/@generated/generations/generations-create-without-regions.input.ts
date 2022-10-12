import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateNestedOneWithoutGenerationsInput } from '../pokedexes/pokedexes-create-nested-one-without-generations.input';
import { abilitiesCreateNestedManyWithoutGenerationsInput } from '../abilities/abilities-create-nested-many-without-generations.input';
import { generation_namesCreateNestedManyWithoutGenerationsInput } from '../generation-names/generation-names-create-nested-many-without-generations.input';
import { item_game_indicesCreateNestedManyWithoutGenerationsInput } from '../item-game-indices/item-game-indices-create-nested-many-without-generations.input';
import { location_game_indicesCreateNestedManyWithoutGenerationsInput } from '../location-game-indices/location-game-indices-create-nested-many-without-generations.input';
import { movesCreateNestedManyWithoutGenerationsInput } from '../moves/moves-create-nested-many-without-generations.input';
import { pokemon_game_indicesCreateNestedManyWithoutGenerationsInput } from '../pokemon-game-indices/pokemon-game-indices-create-nested-many-without-generations.input';
import { pokemon_speciesCreateNestedManyWithoutGenerationsInput } from '../pokemon-species/pokemon-species-create-nested-many-without-generations.input';
import { typesCreateNestedManyWithoutGenerationsInput } from '../types/types-create-nested-many-without-generations.input';
import { version_groupsCreateNestedManyWithoutGenerationsInput } from '../version-groups/version-groups-create-nested-many-without-generations.input';

@InputType()
export class generationsCreateWithoutRegionsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokedexesCreateNestedOneWithoutGenerationsInput, {nullable:false})
    pokedexes!: pokedexesCreateNestedOneWithoutGenerationsInput;

    @Field(() => abilitiesCreateNestedManyWithoutGenerationsInput, {nullable:true})
    abilities?: abilitiesCreateNestedManyWithoutGenerationsInput;

    @Field(() => generation_namesCreateNestedManyWithoutGenerationsInput, {nullable:true})
    generation_names?: generation_namesCreateNestedManyWithoutGenerationsInput;

    @Field(() => item_game_indicesCreateNestedManyWithoutGenerationsInput, {nullable:true})
    item_game_indices?: item_game_indicesCreateNestedManyWithoutGenerationsInput;

    @Field(() => location_game_indicesCreateNestedManyWithoutGenerationsInput, {nullable:true})
    location_game_indices?: location_game_indicesCreateNestedManyWithoutGenerationsInput;

    @Field(() => movesCreateNestedManyWithoutGenerationsInput, {nullable:true})
    moves?: movesCreateNestedManyWithoutGenerationsInput;

    @Field(() => pokemon_game_indicesCreateNestedManyWithoutGenerationsInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesCreateNestedManyWithoutGenerationsInput;

    @Field(() => pokemon_speciesCreateNestedManyWithoutGenerationsInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutGenerationsInput;

    @Field(() => typesCreateNestedManyWithoutGenerationsInput, {nullable:true})
    types?: typesCreateNestedManyWithoutGenerationsInput;

    @Field(() => version_groupsCreateNestedManyWithoutGenerationsInput, {nullable:true})
    version_groups?: version_groupsCreateNestedManyWithoutGenerationsInput;
}

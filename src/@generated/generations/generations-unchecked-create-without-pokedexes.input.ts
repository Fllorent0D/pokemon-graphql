import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { abilitiesUncheckedCreateNestedManyWithoutGenerationsInput } from '../abilities/abilities-unchecked-create-nested-many-without-generations.input';
import { generation_namesUncheckedCreateNestedManyWithoutGenerationsInput } from '../generation-names/generation-names-unchecked-create-nested-many-without-generations.input';
import { item_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput } from '../item-game-indices/item-game-indices-unchecked-create-nested-many-without-generations.input';
import { location_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput } from '../location-game-indices/location-game-indices-unchecked-create-nested-many-without-generations.input';
import { movesUncheckedCreateNestedManyWithoutGenerationsInput } from '../moves/moves-unchecked-create-nested-many-without-generations.input';
import { pokemon_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-create-nested-many-without-generations.input';
import { pokemon_speciesUncheckedCreateNestedManyWithoutGenerationsInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-generations.input';
import { typesUncheckedCreateNestedManyWithoutGenerationsInput } from '../types/types-unchecked-create-nested-many-without-generations.input';
import { version_groupsUncheckedCreateNestedManyWithoutGenerationsInput } from '../version-groups/version-groups-unchecked-create-nested-many-without-generations.input';

@InputType()
export class generationsUncheckedCreateWithoutPokedexesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    main_region_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => abilitiesUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    abilities?: abilitiesUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => generation_namesUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    generation_names?: generation_namesUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => item_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    item_game_indices?: item_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => location_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    location_game_indices?: location_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => movesUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    moves?: movesUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => pokemon_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => typesUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    types?: typesUncheckedCreateNestedManyWithoutGenerationsInput;

    @Field(() => version_groupsUncheckedCreateNestedManyWithoutGenerationsInput, {nullable:true})
    version_groups?: version_groupsUncheckedCreateNestedManyWithoutGenerationsInput;
}

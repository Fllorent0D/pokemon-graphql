import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { pokedexesUpdateOneRequiredWithoutGenerationsNestedInput } from '../pokedexes/pokedexes-update-one-required-without-generations-nested.input';
import { regionsUpdateOneRequiredWithoutGenerationsNestedInput } from '../regions/regions-update-one-required-without-generations-nested.input';
import { abilitiesUpdateManyWithoutGenerationsNestedInput } from '../abilities/abilities-update-many-without-generations-nested.input';
import { generation_namesUpdateManyWithoutGenerationsNestedInput } from '../generation-names/generation-names-update-many-without-generations-nested.input';
import { item_game_indicesUpdateManyWithoutGenerationsNestedInput } from '../item-game-indices/item-game-indices-update-many-without-generations-nested.input';
import { location_game_indicesUpdateManyWithoutGenerationsNestedInput } from '../location-game-indices/location-game-indices-update-many-without-generations-nested.input';
import { movesUpdateManyWithoutGenerationsNestedInput } from '../moves/moves-update-many-without-generations-nested.input';
import { pokemon_game_indicesUpdateManyWithoutGenerationsNestedInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-without-generations-nested.input';
import { pokemon_speciesUpdateManyWithoutGenerationsNestedInput } from '../pokemon-species/pokemon-species-update-many-without-generations-nested.input';
import { version_groupsUpdateManyWithoutGenerationsNestedInput } from '../version-groups/version-groups-update-many-without-generations-nested.input';

@InputType()
export class generationsUpdateWithoutTypesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => pokedexesUpdateOneRequiredWithoutGenerationsNestedInput, {nullable:true})
    pokedexes?: pokedexesUpdateOneRequiredWithoutGenerationsNestedInput;

    @Field(() => regionsUpdateOneRequiredWithoutGenerationsNestedInput, {nullable:true})
    regions?: regionsUpdateOneRequiredWithoutGenerationsNestedInput;

    @Field(() => abilitiesUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    abilities?: abilitiesUpdateManyWithoutGenerationsNestedInput;

    @Field(() => generation_namesUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    generation_names?: generation_namesUpdateManyWithoutGenerationsNestedInput;

    @Field(() => item_game_indicesUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    item_game_indices?: item_game_indicesUpdateManyWithoutGenerationsNestedInput;

    @Field(() => location_game_indicesUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    location_game_indices?: location_game_indicesUpdateManyWithoutGenerationsNestedInput;

    @Field(() => movesUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    moves?: movesUpdateManyWithoutGenerationsNestedInput;

    @Field(() => pokemon_game_indicesUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesUpdateManyWithoutGenerationsNestedInput;

    @Field(() => pokemon_speciesUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutGenerationsNestedInput;

    @Field(() => version_groupsUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateManyWithoutGenerationsNestedInput;
}

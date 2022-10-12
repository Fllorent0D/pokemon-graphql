import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { generation_namesUncheckedUpdateManyWithoutGenerationsNestedInput } from '../generation-names/generation-names-unchecked-update-many-without-generations-nested.input';
import { item_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput } from '../item-game-indices/item-game-indices-unchecked-update-many-without-generations-nested.input';
import { location_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-generations-nested.input';
import { movesUncheckedUpdateManyWithoutGenerationsNestedInput } from '../moves/moves-unchecked-update-many-without-generations-nested.input';
import { pokemon_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-update-many-without-generations-nested.input';
import { pokemon_speciesUncheckedUpdateManyWithoutGenerationsNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-generations-nested.input';
import { typesUncheckedUpdateManyWithoutGenerationsNestedInput } from '../types/types-unchecked-update-many-without-generations-nested.input';
import { version_groupsUncheckedUpdateManyWithoutGenerationsNestedInput } from '../version-groups/version-groups-unchecked-update-many-without-generations-nested.input';

@InputType()
export class generationsUncheckedUpdateWithoutAbilitiesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    main_region_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    canonical_pokedex_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => generation_namesUncheckedUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    generation_names?: generation_namesUncheckedUpdateManyWithoutGenerationsNestedInput;

    @Field(() => item_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    item_game_indices?: item_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput;

    @Field(() => location_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    location_game_indices?: location_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput;

    @Field(() => movesUncheckedUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    moves?: movesUncheckedUpdateManyWithoutGenerationsNestedInput;

    @Field(() => pokemon_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    pokemon_game_indices?: pokemon_game_indicesUncheckedUpdateManyWithoutGenerationsNestedInput;

    @Field(() => pokemon_speciesUncheckedUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedUpdateManyWithoutGenerationsNestedInput;

    @Field(() => typesUncheckedUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    types?: typesUncheckedUpdateManyWithoutGenerationsNestedInput;

    @Field(() => version_groupsUncheckedUpdateManyWithoutGenerationsNestedInput, {nullable:true})
    version_groups?: version_groupsUncheckedUpdateManyWithoutGenerationsNestedInput;
}

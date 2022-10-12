import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { location_areasUncheckedUpdateManyWithoutLocationsNestedInput } from '../location-areas/location-areas-unchecked-update-many-without-locations-nested.input';
import { location_game_indicesUncheckedUpdateManyWithoutLocationsNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-locations-nested.input';
import { location_namesUncheckedUpdateManyWithoutLocationsNestedInput } from '../location-names/location-names-unchecked-update-many-without-locations-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutLocationsNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-locations-nested.input';

@InputType()
export class locationsUncheckedUpdateWithoutRegionsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => location_areasUncheckedUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_areas?: location_areasUncheckedUpdateManyWithoutLocationsNestedInput;

    @Field(() => location_game_indicesUncheckedUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_game_indices?: location_game_indicesUncheckedUpdateManyWithoutLocationsNestedInput;

    @Field(() => location_namesUncheckedUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_names?: location_namesUncheckedUpdateManyWithoutLocationsNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutLocationsNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUncheckedUpdateManyWithoutLocationsNestedInput;
}

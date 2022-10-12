import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { regionsUpdateOneWithoutLocationsNestedInput } from '../regions/regions-update-one-without-locations-nested.input';
import { location_game_indicesUpdateManyWithoutLocationsNestedInput } from '../location-game-indices/location-game-indices-update-many-without-locations-nested.input';
import { location_namesUpdateManyWithoutLocationsNestedInput } from '../location-names/location-names-update-many-without-locations-nested.input';
import { pokemon_evolutionUpdateManyWithoutLocationsNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-locations-nested.input';

@InputType()
export class locationsUpdateWithoutLocation_areasInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => regionsUpdateOneWithoutLocationsNestedInput, {nullable:true})
    regions?: regionsUpdateOneWithoutLocationsNestedInput;

    @Field(() => location_game_indicesUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_game_indices?: location_game_indicesUpdateManyWithoutLocationsNestedInput;

    @Field(() => location_namesUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_names?: location_namesUpdateManyWithoutLocationsNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutLocationsNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUpdateManyWithoutLocationsNestedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { regionsUpdateOneWithoutLocationsNestedInput } from '../regions/regions-update-one-without-locations-nested.input';
import { location_areasUpdateManyWithoutLocationsNestedInput } from '../location-areas/location-areas-update-many-without-locations-nested.input';
import { location_namesUpdateManyWithoutLocationsNestedInput } from '../location-names/location-names-update-many-without-locations-nested.input';
import { pokemon_evolutionUpdateManyWithoutLocationsNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-locations-nested.input';

@InputType()
export class locationsUpdateWithoutLocation_game_indicesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => regionsUpdateOneWithoutLocationsNestedInput, {nullable:true})
    regions?: regionsUpdateOneWithoutLocationsNestedInput;

    @Field(() => location_areasUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_areas?: location_areasUpdateManyWithoutLocationsNestedInput;

    @Field(() => location_namesUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_names?: location_namesUpdateManyWithoutLocationsNestedInput;

    @Field(() => pokemon_evolutionUpdateManyWithoutLocationsNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUpdateManyWithoutLocationsNestedInput;
}

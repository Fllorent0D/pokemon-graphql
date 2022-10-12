import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { location_areasUncheckedUpdateManyWithoutLocationsNestedInput } from '../location-areas/location-areas-unchecked-update-many-without-locations-nested.input';
import { location_game_indicesUncheckedUpdateManyWithoutLocationsNestedInput } from '../location-game-indices/location-game-indices-unchecked-update-many-without-locations-nested.input';
import { pokemon_evolutionUncheckedUpdateManyWithoutLocationsNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-locations-nested.input';

@InputType()
export class locationsUncheckedUpdateWithoutLocation_namesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    region_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => location_areasUncheckedUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_areas?: location_areasUncheckedUpdateManyWithoutLocationsNestedInput;

    @Field(() => location_game_indicesUncheckedUpdateManyWithoutLocationsNestedInput, {nullable:true})
    location_game_indices?: location_game_indicesUncheckedUpdateManyWithoutLocationsNestedInput;

    @Field(() => pokemon_evolutionUncheckedUpdateManyWithoutLocationsNestedInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionUncheckedUpdateManyWithoutLocationsNestedInput;
}

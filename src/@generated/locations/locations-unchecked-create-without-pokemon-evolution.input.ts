import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { location_areasUncheckedCreateNestedManyWithoutLocationsInput } from '../location-areas/location-areas-unchecked-create-nested-many-without-locations.input';
import { location_game_indicesUncheckedCreateNestedManyWithoutLocationsInput } from '../location-game-indices/location-game-indices-unchecked-create-nested-many-without-locations.input';
import { location_namesUncheckedCreateNestedManyWithoutLocationsInput } from '../location-names/location-names-unchecked-create-nested-many-without-locations.input';

@InputType()
export class locationsUncheckedCreateWithoutPokemon_evolutionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => location_areasUncheckedCreateNestedManyWithoutLocationsInput, {nullable:true})
    location_areas?: location_areasUncheckedCreateNestedManyWithoutLocationsInput;

    @Field(() => location_game_indicesUncheckedCreateNestedManyWithoutLocationsInput, {nullable:true})
    location_game_indices?: location_game_indicesUncheckedCreateNestedManyWithoutLocationsInput;

    @Field(() => location_namesUncheckedCreateNestedManyWithoutLocationsInput, {nullable:true})
    location_names?: location_namesUncheckedCreateNestedManyWithoutLocationsInput;
}

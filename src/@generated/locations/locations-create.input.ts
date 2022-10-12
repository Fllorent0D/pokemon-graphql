import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateNestedOneWithoutLocationsInput } from '../regions/regions-create-nested-one-without-locations.input';
import { location_areasCreateNestedManyWithoutLocationsInput } from '../location-areas/location-areas-create-nested-many-without-locations.input';
import { location_game_indicesCreateNestedManyWithoutLocationsInput } from '../location-game-indices/location-game-indices-create-nested-many-without-locations.input';
import { location_namesCreateNestedManyWithoutLocationsInput } from '../location-names/location-names-create-nested-many-without-locations.input';
import { pokemon_evolutionCreateNestedManyWithoutLocationsInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-locations.input';

@InputType()
export class locationsCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => regionsCreateNestedOneWithoutLocationsInput, {nullable:true})
    regions?: regionsCreateNestedOneWithoutLocationsInput;

    @Field(() => location_areasCreateNestedManyWithoutLocationsInput, {nullable:true})
    location_areas?: location_areasCreateNestedManyWithoutLocationsInput;

    @Field(() => location_game_indicesCreateNestedManyWithoutLocationsInput, {nullable:true})
    location_game_indices?: location_game_indicesCreateNestedManyWithoutLocationsInput;

    @Field(() => location_namesCreateNestedManyWithoutLocationsInput, {nullable:true})
    location_names?: location_namesCreateNestedManyWithoutLocationsInput;

    @Field(() => pokemon_evolutionCreateNestedManyWithoutLocationsInput, {nullable:true})
    pokemon_evolution?: pokemon_evolutionCreateNestedManyWithoutLocationsInput;
}

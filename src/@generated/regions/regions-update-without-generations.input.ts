import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { locationsUpdateManyWithoutRegionsNestedInput } from '../locations/locations-update-many-without-regions-nested.input';
import { pokedexesUpdateManyWithoutRegionsNestedInput } from '../pokedexes/pokedexes-update-many-without-regions-nested.input';
import { region_namesUpdateManyWithoutRegionsNestedInput } from '../region-names/region-names-update-many-without-regions-nested.input';
import { version_group_regionsUpdateManyWithoutRegionsNestedInput } from '../version-group-regions/version-group-regions-update-many-without-regions-nested.input';

@InputType()
export class regionsUpdateWithoutGenerationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => locationsUpdateManyWithoutRegionsNestedInput, {nullable:true})
    locations?: locationsUpdateManyWithoutRegionsNestedInput;

    @Field(() => pokedexesUpdateManyWithoutRegionsNestedInput, {nullable:true})
    pokedexes?: pokedexesUpdateManyWithoutRegionsNestedInput;

    @Field(() => region_namesUpdateManyWithoutRegionsNestedInput, {nullable:true})
    region_names?: region_namesUpdateManyWithoutRegionsNestedInput;

    @Field(() => version_group_regionsUpdateManyWithoutRegionsNestedInput, {nullable:true})
    version_group_regions?: version_group_regionsUpdateManyWithoutRegionsNestedInput;
}
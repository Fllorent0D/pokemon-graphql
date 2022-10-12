import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { generationsUpdateManyWithoutRegionsNestedInput } from '../generations/generations-update-many-without-regions-nested.input';
import { locationsUpdateManyWithoutRegionsNestedInput } from '../locations/locations-update-many-without-regions-nested.input';
import { pokedexesUpdateManyWithoutRegionsNestedInput } from '../pokedexes/pokedexes-update-many-without-regions-nested.input';
import { region_namesUpdateManyWithoutRegionsNestedInput } from '../region-names/region-names-update-many-without-regions-nested.input';

@InputType()
export class regionsUpdateWithoutVersion_group_regionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => generationsUpdateManyWithoutRegionsNestedInput, {nullable:true})
    generations?: generationsUpdateManyWithoutRegionsNestedInput;

    @Field(() => locationsUpdateManyWithoutRegionsNestedInput, {nullable:true})
    locations?: locationsUpdateManyWithoutRegionsNestedInput;

    @Field(() => pokedexesUpdateManyWithoutRegionsNestedInput, {nullable:true})
    pokedexes?: pokedexesUpdateManyWithoutRegionsNestedInput;

    @Field(() => region_namesUpdateManyWithoutRegionsNestedInput, {nullable:true})
    region_names?: region_namesUpdateManyWithoutRegionsNestedInput;
}

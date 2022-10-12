import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { locationsUncheckedUpdateManyWithoutRegionsNestedInput } from '../locations/locations-unchecked-update-many-without-regions-nested.input';
import { pokedexesUncheckedUpdateManyWithoutRegionsNestedInput } from '../pokedexes/pokedexes-unchecked-update-many-without-regions-nested.input';
import { region_namesUncheckedUpdateManyWithoutRegionsNestedInput } from '../region-names/region-names-unchecked-update-many-without-regions-nested.input';
import { version_group_regionsUncheckedUpdateManyWithoutRegionsNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-regions-nested.input';

@InputType()
export class regionsUncheckedUpdateWithoutGenerationsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => locationsUncheckedUpdateManyWithoutRegionsNestedInput, {nullable:true})
    locations?: locationsUncheckedUpdateManyWithoutRegionsNestedInput;

    @Field(() => pokedexesUncheckedUpdateManyWithoutRegionsNestedInput, {nullable:true})
    pokedexes?: pokedexesUncheckedUpdateManyWithoutRegionsNestedInput;

    @Field(() => region_namesUncheckedUpdateManyWithoutRegionsNestedInput, {nullable:true})
    region_names?: region_namesUncheckedUpdateManyWithoutRegionsNestedInput;

    @Field(() => version_group_regionsUncheckedUpdateManyWithoutRegionsNestedInput, {nullable:true})
    version_group_regions?: version_group_regionsUncheckedUpdateManyWithoutRegionsNestedInput;
}

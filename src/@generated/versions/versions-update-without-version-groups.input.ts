import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encountersUpdateManyWithoutVersionsNestedInput } from '../encounters/encounters-update-many-without-versions-nested.input';
import { location_area_encounter_ratesUpdateManyWithoutVersionsNestedInput } from '../location-area-encounter-rates/location-area-encounter-rates-update-many-without-versions-nested.input';
import { pokemon_itemsUpdateManyWithoutVersionsNestedInput } from '../pokemon-items/pokemon-items-update-many-without-versions-nested.input';
import { pokemon_species_flavor_textUpdateManyWithoutVersionsNestedInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-update-many-without-versions-nested.input';
import { version_namesUpdateManyWithoutVersionsNestedInput } from '../version-names/version-names-update-many-without-versions-nested.input';

@InputType()
export class versionsUpdateWithoutVersion_groupsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encountersUpdateManyWithoutVersionsNestedInput, {nullable:true})
    encounters?: encountersUpdateManyWithoutVersionsNestedInput;

    @Field(() => location_area_encounter_ratesUpdateManyWithoutVersionsNestedInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUpdateManyWithoutVersionsNestedInput;

    @Field(() => pokemon_itemsUpdateManyWithoutVersionsNestedInput, {nullable:true})
    pokemon_items?: pokemon_itemsUpdateManyWithoutVersionsNestedInput;

    @Field(() => pokemon_species_flavor_textUpdateManyWithoutVersionsNestedInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUpdateManyWithoutVersionsNestedInput;

    @Field(() => version_namesUpdateManyWithoutVersionsNestedInput, {nullable:true})
    version_names?: version_namesUpdateManyWithoutVersionsNestedInput;
}

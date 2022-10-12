import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encountersUncheckedUpdateManyWithoutVersionsNestedInput } from '../encounters/encounters-unchecked-update-many-without-versions-nested.input';
import { pokemon_itemsUncheckedUpdateManyWithoutVersionsNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-versions-nested.input';
import { pokemon_species_flavor_textUncheckedUpdateManyWithoutVersionsNestedInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-unchecked-update-many-without-versions-nested.input';
import { version_namesUncheckedUpdateManyWithoutVersionsNestedInput } from '../version-names/version-names-unchecked-update-many-without-versions-nested.input';

@InputType()
export class versionsUncheckedUpdateWithoutLocation_area_encounter_ratesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version_group_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encountersUncheckedUpdateManyWithoutVersionsNestedInput, {nullable:true})
    encounters?: encountersUncheckedUpdateManyWithoutVersionsNestedInput;

    @Field(() => pokemon_itemsUncheckedUpdateManyWithoutVersionsNestedInput, {nullable:true})
    pokemon_items?: pokemon_itemsUncheckedUpdateManyWithoutVersionsNestedInput;

    @Field(() => pokemon_species_flavor_textUncheckedUpdateManyWithoutVersionsNestedInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUncheckedUpdateManyWithoutVersionsNestedInput;

    @Field(() => version_namesUncheckedUpdateManyWithoutVersionsNestedInput, {nullable:true})
    version_names?: version_namesUncheckedUpdateManyWithoutVersionsNestedInput;
}

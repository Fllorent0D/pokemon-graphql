import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { encounter_slotsUpdateOneRequiredWithoutEncountersNestedInput } from '../encounter-slots/encounter-slots-update-one-required-without-encounters-nested.input';
import { location_areasUpdateOneRequiredWithoutEncountersNestedInput } from '../location-areas/location-areas-update-one-required-without-encounters-nested.input';
import { versionsUpdateOneRequiredWithoutEncountersNestedInput } from '../versions/versions-update-one-required-without-encounters-nested.input';
import { encounter_condition_value_mapUpdateManyWithoutEncountersNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-update-many-without-encounters-nested.input';

@InputType()
export class encountersUpdateWithoutPokemonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    min_level?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    max_level?: IntFieldUpdateOperationsInput;

    @Field(() => encounter_slotsUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    encounter_slots?: encounter_slotsUpdateOneRequiredWithoutEncountersNestedInput;

    @Field(() => location_areasUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    location_areas?: location_areasUpdateOneRequiredWithoutEncountersNestedInput;

    @Field(() => versionsUpdateOneRequiredWithoutEncountersNestedInput, {nullable:true})
    versions?: versionsUpdateOneRequiredWithoutEncountersNestedInput;

    @Field(() => encounter_condition_value_mapUpdateManyWithoutEncountersNestedInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapUpdateManyWithoutEncountersNestedInput;
}

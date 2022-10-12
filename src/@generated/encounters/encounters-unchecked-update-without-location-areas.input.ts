import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { encounter_condition_value_mapUncheckedUpdateManyWithoutEncountersNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-unchecked-update-many-without-encounters-nested.input';

@InputType()
export class encountersUncheckedUpdateWithoutLocation_areasInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    encounter_slot_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pokemon_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    min_level?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    max_level?: IntFieldUpdateOperationsInput;

    @Field(() => encounter_condition_value_mapUncheckedUpdateManyWithoutEncountersNestedInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapUncheckedUpdateManyWithoutEncountersNestedInput;
}

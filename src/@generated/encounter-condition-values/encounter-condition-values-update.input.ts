import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { encounter_conditionsUpdateOneRequiredWithoutEncounter_condition_valuesNestedInput } from '../encounter-conditions/encounter-conditions-update-one-required-without-encounter-condition-values-nested.input';
import { encounter_condition_value_mapUpdateManyWithoutEncounter_condition_valuesNestedInput } from '../encounter-condition-value-map/encounter-condition-value-map-update-many-without-encounter-condition-values-nested.input';
import { encounter_condition_value_proseUpdateManyWithoutEncounter_condition_valuesNestedInput } from '../encounter-condition-value-prose/encounter-condition-value-prose-update-many-without-encounter-condition-values-nested.input';

@InputType()
export class encounter_condition_valuesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_default?: BoolFieldUpdateOperationsInput;

    @Field(() => encounter_conditionsUpdateOneRequiredWithoutEncounter_condition_valuesNestedInput, {nullable:true})
    encounter_conditions?: encounter_conditionsUpdateOneRequiredWithoutEncounter_condition_valuesNestedInput;

    @Field(() => encounter_condition_value_mapUpdateManyWithoutEncounter_condition_valuesNestedInput, {nullable:true})
    encounter_condition_value_map?: encounter_condition_value_mapUpdateManyWithoutEncounter_condition_valuesNestedInput;

    @Field(() => encounter_condition_value_proseUpdateManyWithoutEncounter_condition_valuesNestedInput, {nullable:true})
    encounter_condition_value_prose?: encounter_condition_value_proseUpdateManyWithoutEncounter_condition_valuesNestedInput;
}

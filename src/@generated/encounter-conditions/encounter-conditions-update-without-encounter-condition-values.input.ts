import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { encounter_condition_proseUpdateManyWithoutEncounter_conditionsNestedInput } from '../encounter-condition-prose/encounter-condition-prose-update-many-without-encounter-conditions-nested.input';

@InputType()
export class encounter_conditionsUpdateWithoutEncounter_condition_valuesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => encounter_condition_proseUpdateManyWithoutEncounter_conditionsNestedInput, {nullable:true})
    encounter_condition_prose?: encounter_condition_proseUpdateManyWithoutEncounter_conditionsNestedInput;
}

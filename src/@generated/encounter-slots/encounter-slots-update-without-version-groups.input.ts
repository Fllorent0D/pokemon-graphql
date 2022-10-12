import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { encounter_methodsUpdateOneRequiredWithoutEncounter_slotsNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-encounter-slots-nested.input';
import { encountersUpdateManyWithoutEncounter_slotsNestedInput } from '../encounters/encounters-update-many-without-encounter-slots-nested.input';

@InputType()
export class encounter_slotsUpdateWithoutVersion_groupsInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    slot?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    rarity?: NullableIntFieldUpdateOperationsInput;

    @Field(() => encounter_methodsUpdateOneRequiredWithoutEncounter_slotsNestedInput, {nullable:true})
    encounter_methods?: encounter_methodsUpdateOneRequiredWithoutEncounter_slotsNestedInput;

    @Field(() => encountersUpdateManyWithoutEncounter_slotsNestedInput, {nullable:true})
    encounters?: encountersUpdateManyWithoutEncounter_slotsNestedInput;
}

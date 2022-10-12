import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { encounter_methodsUpdateOneRequiredWithoutEncounter_slotsNestedInput } from '../encounter-methods/encounter-methods-update-one-required-without-encounter-slots-nested.input';
import { version_groupsUpdateOneRequiredWithoutEncounter_slotsNestedInput } from '../version-groups/version-groups-update-one-required-without-encounter-slots-nested.input';
import { encountersUpdateManyWithoutEncounter_slotsNestedInput } from '../encounters/encounters-update-many-without-encounter-slots-nested.input';

@InputType()
export class encounter_slotsUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    slot?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    rarity?: NullableIntFieldUpdateOperationsInput;

    @Field(() => encounter_methodsUpdateOneRequiredWithoutEncounter_slotsNestedInput, {nullable:true})
    encounter_methods?: encounter_methodsUpdateOneRequiredWithoutEncounter_slotsNestedInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutEncounter_slotsNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutEncounter_slotsNestedInput;

    @Field(() => encountersUpdateManyWithoutEncounter_slotsNestedInput, {nullable:true})
    encounters?: encountersUpdateManyWithoutEncounter_slotsNestedInput;
}

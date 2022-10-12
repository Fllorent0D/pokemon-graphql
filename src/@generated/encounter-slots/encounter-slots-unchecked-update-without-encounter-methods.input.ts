import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { encountersUncheckedUpdateManyWithoutEncounter_slotsNestedInput } from '../encounters/encounters-unchecked-update-many-without-encounter-slots-nested.input';

@InputType()
export class encounter_slotsUncheckedUpdateWithoutEncounter_methodsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version_group_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    slot?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    rarity?: NullableIntFieldUpdateOperationsInput;

    @Field(() => encountersUncheckedUpdateManyWithoutEncounter_slotsNestedInput, {nullable:true})
    encounters?: encountersUncheckedUpdateManyWithoutEncounter_slotsNestedInput;
}

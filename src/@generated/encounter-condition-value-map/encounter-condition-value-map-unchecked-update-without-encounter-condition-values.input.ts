import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class encounter_condition_value_mapUncheckedUpdateWithoutEncounter_condition_valuesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    encounter_id?: IntFieldUpdateOperationsInput;
}
